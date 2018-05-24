
// To render a React element into a root DOM node
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('root'));

// Updating an element dynamically
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
