# Live Site URL: https://201-final-project-astro.netlify.app/

## Routing Approach
For the individual product pages, I chose to implement dynamic routing using `[slug].astro` and the `getStaticPaths()` function. 

## Rationale & Benefits
I chose this approach because it is highly scalable. Instead of manually authoring a static HTML page for every single piece of jewelry, this method allows Astro to automatically generate a dedicated page for every item in the `products.json` catalog during the build process. If the store adds 50 new items to the JSON file tomorrow, the site will automatically create 50 new pages without requiring any new code.

## Limitations & Trade-offs
The main trade-off of this approach is the initial complexity of the setup. It required writing strict TypeScript interfaces and mapping the catalog data precisely within `getStaticPaths()` so that the `product` prop could be successfully passed down as an instantiated Class object to the template.