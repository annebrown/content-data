---
title: 'Overflow'
description: 'Page Size Exceeds Viewport'
lastModified: '2025-01-08'
---

## Description

Horizontal or Vertical Overflow is when a pages's content exceeds the viewport's dimensions.

Horizontal overflow can occur, for ex, when navigating to a new route with wider content.



1. Adjust the layout in `layouts/default.vue`:

Modeify layout to ensure content always stays centered:

   ```vue
<template>
    <div class="flex justify-center w-full">

        <!-- Left Sidebar -->
        <div class="flex-shrink-0">
          <!-- Left sidebar content -->
        </div>

        <main class="flex-grow max-w-[calc(100%-500px)] overflow-x-auto">
          <slot />
        </main>

		 <!-- Right Sidebar -->
        <div class="flex-shrink-0">
          <!-- Right sidebar content -->
        </div>
    </div>
</template>
   ```

   This approach uses Vuetify's flexbox utilities to center the main content area.

2. Use a container in `pages/[...slug].vue`:

   In your page component, you can wrap your content (including the table of contents) in a container that ensures centering:

   ```vue
   <template>
     <UContainer>
       <UPage>
         <!-- Your page content here -->
         <template #right>
           <UContentToc :links="page.body.toc.links" />
         </template>
       </UPage>
     </UContainer>
   </template>
   ```

   The `UContainer` component from Nuxt UI (which is free and part of the core Nuxt UI library) can help center and constrain the width of your content, as mentioned in the [Nuxt UI Components documentation](https://ui.nuxt.com/components/container).

3. Use CSS to ensure content stays within the viewport:

   You can add some CSS to your `app.vue` or a global stylesheet to ensure that the content doesn't expand beyond the viewport:

   ```vue
   <style>
   body {
     overflow-x: hidden;
   }
   .content-wrapper {
     max-width: 100vw;
     margin: 0 auto;
     overflow-x: auto;
   }
   </style>
   ```

   Then wrap your main content in a div with the `content-wrapper` class.

4. Use the `onMounted` hook:

   If the issue persists, you might need to recenter the content after the page has loaded. You can use the `onMounted` hook in your `[...slug].vue` component:

   ```vue
   <script setup>
   import { onMounted } from 'vue'

   onMounted(() => {
     // Your centering logic here
     // For example, you might scroll to the top of the page
     window.scrollTo(0, 0)
   })
   </script>
   ```

Remember that these are general suggestions based on the limited information available. The exact solution might depend on your specific implementation details and the structure of your Markdown content. You might need to combine or adjust these approaches to fit your particular use case.

[Nuxt Documentation: Layouts](https://nuxt.com/docs/guide/directory-structure/layouts) provides more information on working with layouts in Nuxt, which might be helpful for further customization.
