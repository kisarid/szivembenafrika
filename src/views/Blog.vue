<template>
  <div class="content">
    <heading>
      <div slot="main">Blog</div>
      <div v-if="selectedArticle" slot="description" class="article-header">
        <div class="sub-heading">{{ selectedArticle.title }}</div>
        <div class="meta">{{ new Date(selectedArticle.date).toLocaleDateString($i18n.locale,  { dateStyle: 'long' }) }} | <span class="author">{{ selectedArticle.author }}</span></div>
        <div class="back">
          <router-link :to="'/blog'">← Vissza</router-link> 
        </div>
      </div>
    </heading>
    <container v-if="selectedArticle">
      <div class="article-view">
        <div class="pic">
          <img
            :src="require(`@/assets/images/blog/${selectedArticle.img[0].name}`)"
            v-bind:style="{ 'object-position': selectedArticle.img[0].objectPosition }"
            alt="">
        </div>
        <div class="blog-text">
          <p v-for="(p, index) in selectedArticle.text" :key="index">{{ p }}</p>
        </div>
        <div class="pic-grid">
          <div class="pic" v-for="(img, index) in selectedArticle.img.slice(1)" :key="index">
            <img
              :src="require(`@/assets/images/blog/${img.name}`)"
              v-bind:style="{ 'object-position': img.objectPosition }"
              alt="">
          </div>
        </div>
        <div class="back" style="margin-bottom: 30px;">
          <router-link :to="'/blog'">← Vissza</router-link> 
        </div>
      </div>
    </container>
    <container class="articles-list" v-if="!selectedArticle">
      <div class="article-extract" v-for="(article, index) in articles" :key="index">
        <div class="pic">
          <img
            :src="require(`@/assets/images/blog/${article.cover ? article.cover.name : article.img[0].name}`)"
            v-bind:style="{ 'object-position': article.cover ? article.cover.objectPosition : article.img[0].objectPosition }"
            alt="">
        </div>
        <div class="text">
          <div class="title sub-heading">{{ article.title }}</div>
          <div class="meta">{{ new Date(article.date).toLocaleDateString($i18n.locale,  { dateStyle: 'long' }) }} | <span class="author">{{ article.author }}</span></div>
          <div class="blog-text">{{ article.text.join(' ').slice(0, 500) }}</div>
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

.blog-text {
  font-size: 16px;
  line-height: 28px;
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
    const today = new Date().getTime()
    const articlesList = [
      '2022-11-08',
      '2022-11-01',
      '2022-10-29',
      '2022-10-26',
      '2022-10-23',
    ].filter(v => new Date(v).getTime() < today)

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
