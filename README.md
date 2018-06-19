
# Footer Component

Footer component for React

Install and save component as a dependency

```
npm install --save library-footer-component

```

Import component into your app

```

import Footer from 'library-footer-component'

```

Create an array of objects with the keys being name and route

```

const footerData = [
	{
		name: "Item 1",
		route: "/",
	},
	{
		name: "Item 2",
		route: "/"
	},
	{
		name: "Item 3",
		route: "/",
	},
]

```

Optional: Create an array of objects with the keys being icon and route for social media

```

const footerSocial = [
	{
		icon: "fab fa-facebook-f",
		route: "/",
	},
	{
		icon: "fab fa-twitter",
		route: "/"
	},
	{
		icon: "fab fa-youtube",
		route: "/",
	},
	{
		icon: "fab fa-linkedin-in",
		route: "/",
	},
	{
		icon: "fab fa-instagram",
		route: "/",
	},
]

```

Render the component with the object arrays we created as well as any other props that are needed

```

render () {
	const footerData = [
		{
			name: "Item 1",
			route: "/",
		},
		{
			name: "Item 2",
			route: "/"
		},
		{
			name: "Item 3",
			route: "/",
		},
	]

	const footerSocial = [
		{
			icon: "fab fa-facebook-f",
			route: "/",
		},
		{
			icon: "fab fa-twitter",
			route: "/"
		},
		{
			icon: "fab fa-youtube",
			route: "/",
		},
		{
			icon: "fab fa-linkedin-in",
			route: "/",
		},
		{
			icon: "fab fa-instagram",
			route: "/",
		},
	]

	return (
		<FooterComponent
			footerData={footerData}
			footerSocial={footerSocial}
			footerTheme="dark"
			footerYear={true}
			footerColumns="2"
			footerLeftColumnAlignment="left"
			footerLeftColumnAlignment="right" />
	)
}

```


| Prop                       | Values              |
| :------------------------- | :------------------ |
| footerData                 | Object              |
| footerSocial               | Object              |
| footerTheme                | light or dark       |
| footerCopyright            | String              |
| footerYear                 | true or false       |
| footerAlignment            | left, right, center |
| footerColumns              | 1 or 2              |
| footerLeftColumnAlignment  | left, right, center |
| footerRightColumnAlignment | left, right, center |

* Please note:

footerAlignment prop will override footerLeftColumnAlignment and footerRightColumnAlignment

footerLeftColumnAlignment and footerLeftColumnAlignment is available if 2 columns to align each column. If used, don't use footerAlignment