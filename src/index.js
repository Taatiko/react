import { createRoot } from "react-dom/client";

const App1 = () => {
  //exlicid
  const Friends = ["Husni", "Halimo", "Zeynab", "Faizo"];
  return Friends.map((frind) => <li>{frind}</li>);
};

const App2 = () => {
  const Lists = ["Hassan", "Duran", "Sayid Ali", "Omar"];

  return Lists.map((list) => {
    //    <h1>Implised</h1>;
    return (
      <>
        <li>{list}</li>
      </>
    );
  });
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <>
    <h1>Implised</h1>
    <App1 />
    <h1>Explised</h1>
    <App2 />
  </>
);
