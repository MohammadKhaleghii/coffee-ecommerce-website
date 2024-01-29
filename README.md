## Naming Directories and Files

Three types of case styles have been used in this project:

- **kebab-case**: All words are lowercase, and each word gets separated by a dash.
  - All of the directories, all of the asset files(for instance: image, icon, fonts, and ...), all of the CSS and other style files, and all of the JS, TS, and TSX files.
        - *For example: seller-introduction(folder name) shop-icon.png, yekan-01.tff, ... shared-content-slice.tsx*

- **PascalCase**: Every word starts with an uppercase letter.
  - Name of the components, the layouts, the containers,  the classes, and the interfaces in their declaration.
    - *For example: InputProps(interface name), ProductPrice(component name), ...*

- **camelCase**: The first word is lowercase, and each subsequent word that follows it starts with an uppercase letter.

  - All of the functions, the variables, and the types in their declaration (local variables).
    - *For example: flatToTree(function name), text style(variable name), ...*
​

## Parts definition

- **Component**: The most crucial and fundamental building blocks represent the most basic interface elements, such as buttons, icons, text fields, date-picker, and ... that can be used in many parts of the application to build and render different User Interface instances. Each component does a single task or part of a single task.

- **Container**: The container consists of groups of components working together to do multiple tasks but generally was designed for reusability purposes such as headers, footers, and ...

- **Layout**: Layouts allow us to overwhelm page parts with reused parts. For example, in the dashboard, we have several pages, all of which have a sidebar navigation menu. The layout helps us to avoid reusing this menu on those pages.

- **Routes**: Represent a complete webpage. Each page is associated with a route based on its file name. Such as the about page, the home page, the search page, and...

- **Services**: The services is a firestore config.


## technologies
- React
- TypeScript
- JSX
- CSS
- Styled-components
- Tailwindcss


