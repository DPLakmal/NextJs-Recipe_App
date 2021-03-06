import {
    createClient,
    createPreviewSubscriptionHook,
  } from "next-sanity";
  
  import imageUrlBuilder from '@sanity/image-url'
 
 
  import { PortableText as PortableTextComponent } from '@portabletext/react'

  const config = {
    projectId: "a5odaph9",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  };
  const builder = imageUrlBuilder(config);
  export const sanityClient = createClient(config);
  
  export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  
  export const urlFor = (source) => builder.image(source);
  
  export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />