# Creating CMS using Notion and Strapi - USing NextJS 
## Project Overview
I want to create a NextJS app and use Notion as a CMS to manage my content. I just want to display some simple data. Below are the steps i am working on to achieve this.

| Feature                  | **Notion**                                  | **Strapi**                                             |
| ------------------------ | ------------------------------------------- | ------------------------------------------------------ |
| **Type**                 | Headless CMS via API wrapper                | Full-featured Headless CMS                             |
| **Hosting**              | Notion-hosted                               | Self-hosted or Cloud (Strapi Cloud, Vercel + DB, etc.) |
| **Best For**             | Simple content management by non-tech users | Scalable, structured content APIs with custom logic    |
| **Setup Time**           | Super fast (5–15 mins)                      | Medium (30 mins–1 hr)                                  |
| **Custom Backend Logic** | ❌ Not possible                              | ✅ Fully customizable (Node.js backend)                 |
| **Authentication**       | ❌ Not built-in                              | ✅ Full user roles, JWT, API access control             |
| **Rich Text/Blocks**     | ✅ Notion blocks, nested content, flexible   | ⚠️ Limited — Markdown or WYSIWYG only                  |
| **Database Modeling**    | Limited (no relations, types are basic)     | Full relational database modeling                      |
| **Performance**          | Great for light content                     | More scalable for heavy traffic                        |
| **Integrations**         | Poor (via Zapier or manual)                 | Strong API & webhook support                           |
| **API Access**           | Read-only (mostly)                          | Full CRUD support                                      |
| **Cost**                 | Free (for basic use)                        | Free (self-hosted), Paid for Strapi Cloud              |
| **Editor UX**            | Excellent — perfect for non-tech users      | Good — but more structured and admin-like              |



## Steps - Notion [Completed] ✅ [Folder](./notion/)

* [done] Create a new NextJS app (obvisously)

* [done] Create a new Notion app (obvisously)

* [done] Create a new Strapi app (obvisously) .. Hope you got that 

* [done] Install the dependencies [code is below]

* [done] Create a new Notion database 🔵
    * Title, Header Image, Content, Tags, Date, Status

* [done] Get the Notion database ID and API key 🔑 **[NEXT_PUBLIC_NOTION_API]**
    - can use `webHook` to pass or fetch the data from `3rd Party`
    
      steps:
      - get api key and database id from notion.
      - connect notion database to integration.

* [done] Implement it in the NextJS app 🔵

* [done] Create a page to display the data 🟠
  - [done] fetch the data from the Notion database 
  - [done] display the data in the page (in a better way)

* [done] Complete 🎉🙌 : check description for github link


## Steps - Strapi [working] ⚒ [Folder](./strapi/)

* [working] Create a strapi nextjs app `npx create-strapi-app@latest`

* [] Set up the admin panel
    - Create first administrator user
    - Access admin panel at http://localhost:1337/admin

* [] Create content structure
    - Create "Restaurant" collection type
        * Name (Text, Required, Unique)
        * Description (Rich Text)
    - Create "Category" collection type
        * Name (Text, Required, Unique)
        * Relation to Restaurant

* [] Configure API permissions
    - Go to Settings > Users & Permissions > Roles
    - Configure Public role permissions
    - Enable find and findOne for Restaurant and Category

* [] Create and publish content
    - Add sample restaurants
    - Add categories
    - Publish content

* [] Integrate with NextJS
    - Set up API endpoints
    - Fetch data from Strapi
    - Display content in NextJS app

* [] Complete 🎉🙌




### Please do not use my API >_<

* [done] Add features to ease my work in streamlabs

> 💡 Use replit or firebase studio to quickly achieve the something result.

## Variables and Usefull stuffs

* **Database ID**: `1ed444a8256d8090a385e21cee71ede5`



## Code Snippets

    ```
    "dependencies": {
      "@notion-render/bookmark-plugin": "^0.0.2",
      "@notion-render/client": "^0.0.2",
      "@notion-render/hljs-plugin": "^0.0.2",
      "@notionhq/client": "^3.0.0",
      "next": "15.3.2",
      "react": "^19.0.0",
      "react-dom": "^19.0.0"
      },
    "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "tailwindcss": "^4",
        "typescript": "^5"
      }
    ```