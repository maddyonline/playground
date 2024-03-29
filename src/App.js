import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import store from "store2";
import "./App.css";

function App() {
  const [code, setCode] = React.useState("<strong>Hello World!</strong>");
  const [savedCode, setSavedCode] = React.useState("");
  window.store = store;
  store.set("key", { name: "maddy" });
  return (
    <div style={{ display: "flex" }}>
      <div>
        <LiveProvider code={code}>
          <main className="container">
            <div className="container__content">
              <div className="container_editor_area">
                <LiveEditor
                  className="container__editor"
                  value={code}
                  onValueChange={(code) => setCode(code)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                  }}
                />
              </div>
            </div>
          </main>
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
      <div>
        <pre>{savedCode}</pre>
        <button onClick={() => setSavedCode(store.get("code") ?? "")}>
          Recall from store
        </button>
        <button onClick={() => setCode(savedCode)}>Load editor</button>
        <button onClick={() => store("code", code)}>Save in store</button>
        <button onClick={() => store(false)}>Clear store</button>
      </div>
    </div>
  );
}

export default App;
