<template>
  <div class="content">
    <heading>
      <div slot="main">Blog</div>
      <div v-if="selectedArticle" slot="description" class="article-header">
        <div class="sub-heading">{{ selectedArticle.title }}</div>
        <div class="meta">{{ new Date(selectedArticle.date).toLocaleDateString($i18n.locale,  { dateStyle: 'long' }) }}<span class="author" v-if="selectedArticle.author"> | {{ selectedArticle.author }}</span></div>
        <div class="back">
          <router-link :to="'/blog'">← Vissza</router-link> 
        </div>
      </div>
    </heading>
    <container v-if="selectedArticle">
      <div class="article-view">
        <div class="pic" v-if="selectedArticle.innerCover !== null">
          <img
            :src="require(`@/assets/images/blog/${(selectedArticle.innerCover || selectedArticle.cover).name}`)"
            :style="(selectedArticle.innerCover || selectedArticle.cover).style"
            alt="">
            <span v-if="(selectedArticle.innerCover || selectedArticle.cover).caption" class="caption">{{ (selectedArticle.innerCover || selectedArticle.cover).caption }}</span>
        </div>
        <div class="blog-text">
          <template v-for="(block, i) in selectedArticle.blocks">
            <p v-if="block.type === 'text'" :class="block.classes" v-html="block.content"></p>
            <div v-if="block.type === 'img'" class="blog-pics">
              <div class="pic" :class="img.class" v-for="(img, j) in block.content" :key="j">
                <img
                  :src="require(`@/assets/images/blog/${img.name}`)"
                  :style="img.style"
                  alt="">
                  <span v-if="img.caption" class="caption">{{ img.caption }}</span>
              </div>
            </div>
            <ul v-if="block.type === 'list' && block.listType === 'ul'">
              <li v-for="(l, index) in block.content" :key="index">{{ l }}</li>
            </ul>
            <ol v-if="block.type === 'list' && block.listType === 'ol'">
              <li v-for="(l, index) in block.content" :key="index">{{ l }}</li>
            </ol>
          </template>
        </div>
        <div class="back" style="margin-block: 30px;">
          <router-link :to="'/blog'">← Vissza</router-link> 
        </div>
      </div>
    </container>
    <container class="articles-list" v-if="!selectedArticle">
      <div class="article-extract" v-for="(article, index) in articles" :key="index">
        <div class="pic">
          <router-link :to="`/blog/${article.id}`">
            <img
              :src="require(`@/assets/images/blog/${article.cover.name}`)"
              :style="article.cover.style"
              alt="">
          </router-link>
        </div>
        <div class="text">
          <div class="title sub-heading">{{ article.title }}</div>
          <div class="meta">{{ new Date(article.date).toLocaleDateString($i18n.locale,  { dateStyle: 'long' }) }}<span class="author" v-if="article.author"> | {{ article.author }}</span></div>
          <div class="blog-text">{{ article.blocks.filter(b => b.type === 'text').map(b => b.content).join(' ').slice(0, 500) }}</div>
        </div>
        <div class="to-article">
          <router-link :to="`/blog/${article.id}`">Tovább →</router-link> 
        </div>
      </div>
    </container>
  </div>
</template>

<style lang="scss" scoped>
.author {
  font-style: italic;
}

.meta,
.back {
  font-size: 16px;
}

.pic .caption {
  font-size: 11px;
  font-style: italic;
  line-height: normal;
}

.blog-header {
  font-weight: bold;
}

.blog-text {
  font-size: 16px;
  line-height: 24px;
}

.quote {
  padding-left: min(10vw, 4em);
  padding-right: min(10vw, 4em);
  font-style: italic;
}

.j-right {
  text-align: right;
}

.blog-pics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  .pic {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 4px;

      @media (min-width: 768px) {
        &.small {
          grid-column: span 1;
        }
      }
  }
}

.article-header {
  display: grid;
  grid-template: auto auto / 1fr auto;
  grid-auto-flow: column;
  .sub-heading {
    margin-bottom: 5px;
  }
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;

  .article-extract {
    display: grid;
    grid-template:
      'pic   ' auto
      'text  ' auto
      'button' auto
      / auto;
    gap: 10px 20px;

    .pic {
      grid-area: pic;
      max-height: 300px;
    }

    .text {
      grid-area: text;
      font-size: 16px;

      .title {
        margin-bottom: 5px;
      }

      .meta {
        margin-bottom: 24px;
      }

      .blog-text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .to-article {
      grid-area: button;
      align-self: end;
      font-size: 16px;
    }

    @media (min-width: 768px) {
      grid-template:
        'pic text  ' auto
        'pic button' auto
        / auto 1fr;
      height: 200px;

      .pic {
        grid-area: pic;
        width: 265px;
        height: 200px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import container from '@/components/moyo/container.vue'
import heading from '@/components/moyo/heading.vue'
import { Article } from '@/interfaces/article'

@Component({
  name: 'Blog',
  components: { container, heading },
})
export default class Blog extends Vue {
  articles: Article[]
  selectedArticle: Article

  data() {
    return {
      selectedArticle: undefined
    }
  }

  created() {
    const now = new Date().getTime()
    const articlesList = [
      '2023-08-31',
      '2023-08-27',
      '2023-08-25',
      '2023-08-10f',
      '2023-08-10e',
      '2023-08-10d',
      '2023-08-10c',
      '2023-08-10b',
      '2023-08-10',
      '2023-07-11',
      '2023-06-30',
      '2023-06-02',
      '2023-05-15',
      '2023-04-27',
      '2023-04-23',
      '2023-04-20',
      '2023-04-19',
      '2023-01-27',
      '2023-01-17',
      '2022-11-09',
      '2022-11-08',
      '2022-11-01',
      '2022-10-29',
      '2022-10-26',
      '2022-10-23',
    ].filter(v => new Date(`${v.slice(0, 10)} 08:00:00`).getTime() < now)

    this.articles = articlesList.map(title => require(`@/blog/${title}.json`))

    if (this.$route.params.article) {
      this.selectedArticle = this.articles.find(v => v.id === this.$route.params.article)!
    }

    this.$watch(() => this.$route.params.article, (articleId) => {
      this.selectedArticle = this.articles.find(v => v.id === articleId)!
    })
  }
}
</script>
