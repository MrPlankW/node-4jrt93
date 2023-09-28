# Intro
Avant React Admin is a production-ready solution for admin interfaces. This project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.


With those objectives in mind, we have built the following templates and a scaffold based on React.js, which should help you prototyping production-ready admin interfaces.

## Features
Here are some benefits you can get from Avant:

- **React**: A language for application-scale JavaScript
- **Blocks**: Build page with block template
- **Neat Design**: Follow [Avant React Admin specification](http://ant.design/)
- **Common Templates**: Typical templates for enterprise applications
- **State of The Art Development**: Newest development stack of React/umi/dva/antd
- **Responsive**: Designed for variable screen sizes
- **Theming**: Customizable theme with simple config
- **International**: Built-in i18n solution
- **Best Practices**: Solid workflow to make your code healthy
- **Mock development**: Easy to use mock development solution
- **UI Test**: Fly safely with unit and e2e tests

## Demo
 [Avant Dark](https://neo-avant.netlify.com/dashboardlite) 
 
 [Avant Light](https://neo-avant-light.netlify.com/dashboardlite) 

## Scaffolding
You'll find the following directories and files, grouping common resources and providing both compiled and minified distribution files, as well as raw source files.

```
├── config                   # umi config, include routes and webpack etc.
├── mock                     # Local Mock Data
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # Local static files
│   ├── components           # Components
│   ├── e2e                  # Integrated Test Case
│   ├── layouts              # Common Layouts
│   ├── models               # Global dva Model
│   ├── pages                # Sub-pages and templates
│   ├── services             # Back-end Services
│   ├── utils                # Utility
│   ├── locales              # i18n resources
│   ├── global.less          # Global Stylesheet
│   └── global.ts            # Global JS
├── tests                    # Tests Configuration
├── README.md
└── package.json
```

## Installation

> Make sure you have nodejs installed in your system with minimum version v8.10.0 you can check installed version by running node -v command in terminal. If you are having older version, please install latest version from nodejs.org and you will need NPM also. You will need yarn, node and git. The project is based on ES2015+, React, <b>UmiJS</b>, dva, g2 and antd. It would be helpful if you have pre-existing knowledge on those.




# Development
Go into app's directory and install dependencies:

```
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm start

# build for production with minification
npm run build
```

![](https://gw.alipayobjects.com/zos/rmsportal/uHAzKpIQDMGdmjIxZLOV.png)
This will automatically open http://localhost:8000. If you see the following page then you have succeeded.

## Add New Page

This "page" refers to a module that is configured with a route and can be directly accessed through a link. To create a new page, usually only a simple configuration is required on the scaffold.

<h3>First, add js,less files</h3>
Create new js,less files under src/pages. If there are multiple related pages, you can create a new folder to place related files.

```diff
config
src
  models
  pages
+   NewPage.js
+   NewPage.less
  ...
...
package.json
```

For better Demonstration, we initialize the contents of `NewPage.js` as follows:

```jsx
export default () => {
  return <div>New Page</div>;
};
```
Temporarily do not add content to the style files in this document, you can also try to add them yourself.



```css
@import '~antd/lib/style/themes/default.less';
```

This makes it easy to get antd style variables and use them in your files, which helps to maintain the consistency of the page, and facilitate the implementation of custom themes.

<h3>Second, add the files into menus,routes</h3>

Because Avant React Admin uses the configuration route of umi, you need to add the corresponding routing information in the configuration file `config/config.ts`:

```diff
...
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
+     // new page
+     {
+       path: 'new',
+       name: 'new',
+       icon: 'plus-square',
+       component: 'NewPage',
+     },
...
```

Where `icon` and `name` are the required configuration in the menu component, and `config/config.ts` is also read in the menu component to add the relevant logic.

We implemented internationalization in Avant React Admin 2.0, so you also need to add the relevant copy in `src/locales/zh-CN.ts` and `src/locales/en-US`:

```diff
// zh-CN.ts
export default {
  'navbar.lang': 'English',
+ 'menu.new': '新页面',
  'menu.home': '首页',
  ...
```

```diff
// en-US.ts
export default {
  'navbar.lang': '中文',
+ 'menu.new': 'New Page',
  'menu.home': 'Home',
  ...
```

Then visit `http://localhost:8000/new` to see the new page.
After the layout and routes are configured, go back to the newly created `NewPage.ts` and start writing business codes!
See the introduction in [Router and Nav](/docs/router-and-nav) for more details on routing.


## Layout 
Layout is the outermost structure for a project, usually consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page.
<h3>Layout in Avant React Admin</h3>

We abstract common layouts in Avant React Admin, and put them in `/layouts`, includes:

- <b>BasicLayout:</b> Basic Layout, includes header navigation, sidebar and notification.
- <b>BlankLayout:</b> Blank Layout
- <b>UserLayout:</b> Layout for login and sign-ups.

### Usage

To manage mappings between routes and pages, we could configure `config/config.ts` as follows:

```jsx
module.exports = [
  {
    path: '/',
    component: '../layouts/BasicLayout', // layout for pages in routes
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
          { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
          { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
        ],
      },
    ],
  },
];
```
And more router config could be found in：[Umi router](https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1)。

### Components for layout

Avant React Admin currently provides two components for layout: [Layout](http://ant.design/components/layout/) and [Grid](http://ant.design/components/grid/).

<h4>Grid Component</h4>

Grid layout is widely used, one of its major benefits is responsiveness.

Grid Component provided by Avant React Admin is tremendously powerful. you can set span, responsive columns, and optional `flex` layout. It covers a majority of use-cases: See [Grid](http://ant.design/components/grid/) for details.

<h4>Layout Component</h4>

If you need more structured layout components, then [Layout](http://ant.design/components/layout/) is your best option. You only need to fill in the blanks to build professional layout. See [Layout](http://ant.design/components/layout/) for details

## Styling

This document is mainly about how to use and organize style files in projects. If you want to get a basic knowledge of CSS or look for properties usage, you can refer to the [MDN doc](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

<h4>less</h4>

Ant Design Pro defaults to using less as the style language, we recommend that you learn about the features of [less](http://lesscss.org/) before using it or sometimes when you have some questions.

### CSS Modules

In the style development process, there are two prominent problems:

- Global Pollution - CSS selectors are globally valid. Selectors with the same name in different files will be built together, and the former will be overrided by the latter.
- Complex Selector - in order to avoid the above problem, we have to be careful when writing styles. The increase in flags for range restriction will lead to a growing class name, besides that, naming style confusion in multi person development and an increasing number of selectors on an element is hard to avoid.

In order to solve the above problems, our scaffold use CSS Modules as a modular solution. Let us have a look at how to write style in this mode.

```tsx
// example.ts
import styles from './example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css
/* example.less */
.title {
    color: @heading-color;
    font-weight: 600;
    margin-bottom: 16px;
}
```

Write style use less file does not seem to change much, but the class name is relatively simple (the actual project is also the case). The classname in js files would be replaced by an object attribute, which has the same name as the selector in the less file from where the object was imported.

In the above style file, `.title` will only work in this file, you can use the same selector name in any other file, it will not affect here. But sometimes, we just want a global style which can take effect everywhere? You can use `:global`.

```css
 /* example.less */
.title {
  color: @ heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}

/* Define the global style */
:global (.text) {
  font-size: 16px;
}

/* Define multiple global styles */
:global {
  .footer {
    color: #ccc;
  }
  .sider {
    background: #ebebeb;
  }
}
```

### Override the component style

Because of the special needs of the project, we often meet the need to cover the component style, here is a simple example.

Antd Select In multi-select state, the default will show all the select items, here we add a limit height for display scroll bar when the content beyond this height.

```js
// TestPage.ts
import { Select } from 'antd';
import styles from './TestPage.less';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: 300 }}
    placeholder="Please select"
    className={styles.customSelect}
  >
        {children}
      
  </Select>,
  mountNode
);
```

```css
// TestPage.less
.customSelect {
  :global {
    .ant-select-selection {
      max-height: 51px;
      overflow: auto;
    }
  }
}
```

Two points need to be noted:

- The imported antd component class name is not translated by CSS Modules, so the overridden class name `.ant-select-selection` must be put in `:global`.
- Because of the previous note, the override is global. To avoid affecting other Select components, the setting needs to be wrapped by an extra classname to add range restriction.

## Dependencies

- [ReactJS](https://reactjs.org/) A JavaScript library for building user interfaces
- [Ant Design of React](http://ant.design/)
Following React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.

- [UmiJS](https://umijs.org/) umi is a routing-based framework that supports next.js-like conventional routing and various advanced routing functions, such as routing-level on-demand loading. With a complete plugin system that covers every life cycle from source code to build product, umi is able to support various functional extensions and business needs. Currently umi has almost 50+ plugins in both community and inside company.

- [Less](http://lesscss.org/ )  (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles. Because Less looks just like CSS, learning it is a breeze

## Support
I'd be glad to help you if you have any questions relating to this theme. No guarantees, but I'll do my best to assist. If you have a more general question relating to the themes on ThemeForest.

Created: 16/10/2019

By: themesmile