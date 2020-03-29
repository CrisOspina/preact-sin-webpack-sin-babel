const { h } = window.preact
const htm = window.htm
const jsx = htm.bind(h)

export const Navbar = () => {
  return jsx`
    <div class="navbar mb-4">
    <img 
        class="fadeIn img-logo"
        src="https://opencollective-production.s3.us-west-1.amazonaws.com/98b608a0-eb6d-11e9-ad31-61fa1eef1182.png" 
        alt="Preact"
      />
      <h1 class="animated fadeIn text-5xl">
        <a href="https://preactjs.com/"><strong> Preact </strong></a>
        sin utilizar webpack, ni babel...
      </h1> 
    </div>
    <hr class="mb-4"/> 
  `
}