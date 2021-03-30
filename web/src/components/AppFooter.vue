<template>
  <footer class="dev-footer bg-footer mt-auto p-8 text-center text-gray">
    <div class="container">
      <div class="flex flex-row justify-center mb-2 text-black dark:text-white">
        <a href="https://github.com/aulonm">
          <github-logo class="h-4" />
        </a>
        <a href="https://instagram.com/photomujaj">
          <instagram-logo class="h-4" />
        </a>
        <a href="https://instagram.com/aulonm">
          <instagram-logo class="h-4" />
        </a>
        <a href="https://www.linkedin.com/in/aulon-mujaj-585a3457/">
          <linkedin-logo class="h-4" />
        </a>
        <a href="https://twitter.com/aulonmujaj">
          <twitter-logo class="h-4" />
        </a>
      </div>
      <p class="font-bold text-xs">
        Made with Gridsome and Sanity by
        <a href="https://github.com/aulonm" target="_blank" rel="noopener nofoloow">Aulon Mujaj</a>
      </p>
    </div>
  </footer>
</template>

<script>
import GithubLogo from '@/assets/images/github.svg?inline';
import InstagramLogo from '@/assets/images/instagram.svg?inline';
import LinkedinLogo from '@/assets/images/linkedin.svg?inline';
import TwitterLogo from '@/assets/images/twitter.svg?inline';

export default {
  components: {
    GithubLogo,
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
  },
};
</script>
