import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { data } from "./data";

const Div = styled.div`
  padding: 20px;
`;

const A = styled.a`
  margin-right: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UlContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Ul = styled(animated.ul)`
  position: fixed;
`;

const App = () => {
  const [selected, setSelected] = React.useState(data.root);
  const [back, setBack] = React.useState();
  const transitions = useTransition(selected, item => item.id, {
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" }
  });

  const transitionsBack = useTransition(selected, item => item.id, {
    from: { transform: "translate3d(-100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(100%,0,0)" }
  });

  const Breadcrumb = ({ node }) => {
    const resp = [];
    let current = node;

    while (current) {
      resp.unshift(current);
      current = data[current.parent];
    }

    return (
      <Grid>
        {selected.parent && (
          <button
            onClick={() => {
              setSelected(data[selected.parent]);
              setBack(true);
            }}
          >
            Back
          </button>
        )}
        {resp.map(x => (
          <A
            key={x.id}
            href=""
            onClick={e => {
              e.preventDefault();
              setSelected(data[x.id]);
              setBack(true);
            }}
          >
            {x.name}
          </A>
        ))}
      </Grid>
    );
  };

  const List = ({ trans }) => {
    return trans.map(({ item, props, key }) => {
      console.log(item, props, key);
      return (
        <Ul key={key} style={props}>
          {(item.children || []).map(id => {
            if (!data[id].children) {
              return (
                <li key={id}>
                  <input
                    type="checkbox"
                    checked={data[id].selected}
                    onChange={() => (data[id].selected = !data[id].selected)}
                  />
                  {data[id].name}
                </li>
              );
            }
            return (
              <li key={id}>
                <input
                  type="checkbox"
                  checked={data[id].selected}
                  onChange={() => (data[id].selected = !data[id].selected)}
                />
                <a
                  href=""
                  onClick={e => {
                    e.preventDefault();
                    setSelected(data[id]);
                    setBack(false);
                  }}
                >
                  {data[id].name}
                </a>
              </li>
            );
          })}
        </Ul>
      );
    });
  };

  return (
    <Div>
      <h1>
        <Breadcrumb node={selected} />
      </h1>
      <UlContainer>
        <List trans={back ? transitionsBack : transitions} />
      </UlContainer>
    </Div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
