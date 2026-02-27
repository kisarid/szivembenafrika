#!/usr/bin/env python3
import json
import os
import re
from pathlib import Path
from datetime import datetime

def extract_date_from_filename(filename):
    """Extract date from filename like 2026-02-27a -> 2026-02-27"""
    match = re.match(r'(\d{4}-\d{2}-\d{2})', filename)
    return match.group(1) if match else ""

def process_text_blocks(lines):
    """Process lines into appropriate blocks"""
    blocks = []
    current_list_items = []
    current_list_type = None
    
    for line in lines:
        # Check if it's an image reference (filename pattern like 2026-02-27d_1)
        if re.match(r'^\d{4}-\d{2}-\d{2}[a-z]?_\d+$', line.strip()):
            # Save any pending list
            if current_list_items:
                blocks.append({
                    "type": "list",
                    "listType": current_list_type or "ul",
                    "content": current_list_items
                })
                current_list_items = []
                current_list_type = None
            
            # Add image reference with .jpg extension
            img_name = line.strip() + ".jpg"
            blocks.append({
                "type": "img",
                "content": [{"name": img_name}]
            })
        # Check if it's a comma-separated list of image names (ending in .jpg, .png, etc.)
        elif ',' in line and all(part.strip().endswith(('.jpg', '.png', '.jpeg')) for part in line.split(',')):
            # Save any pending list
            if current_list_items:
                blocks.append({
                    "type": "list",
                    "listType": current_list_type or "ul",
                    "content": current_list_items
                })
                current_list_items = []
                current_list_type = None
            
            # Process image line
            image_parts = [part.strip() for part in line.split(',')]
            img_content = [{"name": img_name} for img_name in image_parts]
            blocks.append({
                "type": "img",
                "content": img_content
            })
        # Check if it's a list item (starts with •)
        elif line.startswith('•'):
            list_type = "ul"
            item = line[1:].strip()
            if current_list_type != list_type and current_list_items:
                blocks.append({
                    "type": "list",
                    "listType": current_list_type,
                    "content": current_list_items
                })
                current_list_items = []
            current_list_type = list_type
            current_list_items.append(item)
        # Regular text line
        else:
            # Save any pending list
            if current_list_items:
                blocks.append({
                    "type": "list",
                    "listType": current_list_type or "ul",
                    "content": current_list_items
                })
                current_list_items = []
                current_list_type = None
            
            # Convert URLs and emails to HTML <a> tags
            text = line
            
            # Convert URLs to HTML <a> tags
            url_pattern = r'(https?://[^\s]+)'
            def replace_url(match):
                url = match.group(1)
                # Escape quotes in URL for HTML
                escaped_url = url.replace('"', '\\"')
                return f'<a href="{escaped_url}">{url}</a>'
            text = re.sub(url_pattern, replace_url, text)
            
            # Convert email addresses to mailto links
            email_pattern = r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})'
            def replace_email(match):
                email = match.group(1)
                return f'<a href="mailto:{email}">{email}</a>'
            text = re.sub(email_pattern, replace_email, text)
            
            blocks.append({
                "type": "text",
                "content": text
            })
    
    # Save any remaining list
    if current_list_items:
        blocks.append({
            "type": "list",
            "listType": current_list_type or "ul",
            "content": current_list_items
        })
    
    return blocks

def convert_raw_to_json(raw_file_path, output_dir):
    """Convert a single raw text file to JSON"""
    filename = Path(raw_file_path).name
    
    with open(raw_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove markdown code fence markers if present
    content = content.replace('```plaintext\n', '').replace('```', '').strip()
    
    # Split into lines and filter out empty lines
    lines = [line.strip() for line in content.split('\n') if line.strip()]
    
    if len(lines) < 2:
        print(f"Warning: {filename} has fewer than 2 lines")
        return False
    
    # Extract components
    title = lines[0]
    author = lines[1]
    date = extract_date_from_filename(filename)
    
    # Process remaining lines as blocks
    content_lines = lines[2:]
    blocks = process_text_blocks(content_lines)
    
    # Set cover name to id + "_1.jpg"
    cover_name = f"{filename}_1.jpg"
    
    # Create JSON object
    json_obj = {
        "id": filename,
        "title": title,
        "date": date,
        "author": author,
        "blocks": blocks,
        "cover": {
            "name": cover_name,
            "style": {"object-position": "center center"}
        },
        "innerCover": None
    }
    
    # Write to output file
    output_file = Path(output_dir) / f"{filename}.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(json_obj, f, ensure_ascii=False, indent=4)
    
    print(f"✓ Converted {filename} -> {output_file.name}")
    return True

def main():
    raw_dir = Path("/Users/kisarid/Dev/szivembenafrika/src/blog/raw")
    converted_dir = Path("/Users/kisarid/Dev/szivembenafrika/src/blog/converted")
    
    # Ensure converted directory exists
    converted_dir.mkdir(parents=True, exist_ok=True)
    
    # Get all raw files (excluding directories)
    raw_files = sorted([f for f in raw_dir.iterdir() if f.is_file()])
    
    print(f"Found {len(raw_files)} file(s) to convert\n")
    
    converted_count = 0
    for raw_file in raw_files:
        if convert_raw_to_json(raw_file, converted_dir):
            converted_count += 1
    
    print(f"\n✓ Successfully converted {converted_count} file(s)")

if __name__ == "__main__":
    main()
