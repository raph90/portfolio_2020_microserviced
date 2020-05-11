/*
Media queries: 
*/
const maxWidth = { phone: 375, tabPort: 600, tabLand: 900, desk: 1200 }
const minWidth = { deskLarge: 1800 }

// [phone, tabPort, tabLand, desk]

export let responsive = {
  phone: null,
  tabPort: null,
  tabLand: null,
  desk: null,
  deskLarge: null,
}

responsive = Object.keys(maxWidth).reduce((prev, current) => {
  prev[current] = query => {
    return `@media (max-width: ${maxWidth[current]}px) {
            ${query}
          }`
  }
  return prev
}, {})

responsive = Object.keys(minWidth).reduce((prev, current) => {
  prev[current] = query => {
    return `@media (min-width: ${minWidth[current]}px) {
            ${query}
    }`
  }
  return prev
}, responsive)

console.log("responsive is", responsive)

console.log(responsive.tabPort("background-color: red"))
