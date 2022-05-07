import NextImage from 'next/image';

export const Image = () => {
  return (<div>
    <g-image v-if="hasLocalImage" :class="imageClasses" :src="mainImage.asset.localFile" />
    <img v-else-if="remoteSanityImage" :class="imageClasses" :src="remoteSanityImage" />
    <AppImagePlaceholder v-else-if="placeholder" class="w-full h-full absolute" />
  </div>)
}