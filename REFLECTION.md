# Live Site URL: https://201-final-project-astro.netlify.app/

## Routing Approach
For the individual product pages, I chose to dynamic routing with `[slug].astro` and the `getStaticPaths()` function. 

## Rationale & Benefits
I chose this approach because it is very efficient and scalable. I only need one template file to create all the product pages. 

The biggest benefit is that it is easy to update. If the store adds more jewelry to the `products.json` file in the future, Astro will automatically generate the new pages. I do not need to make new files by hand.

## Limitations & Trade-offs
The main trade-off is that the initial setup is a bit difficult. I had to write strict TypeScript interfaces and carefully map the JSON data inside `getStaticPaths()` so that the `product` prop could be passed correctly to the UI components.