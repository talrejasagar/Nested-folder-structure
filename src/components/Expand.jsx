import { useState } from "react";

const Expand = ({ veggies }) => {
  const [exp, setExp] = useState(false);
  console.log(veggies);
  if (veggies.isexpand) {
    return (
      <div>
        <span onClick={() => setExp(!exp)}>
          {veggies.name}
          <br />
        </span>
        <div style={{ display: exp ? "block" : "none", paddingLeft: 15 }}>
          {veggies.child.map((exp) => {
            return <Expand veggies={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {veggies.name}
        <br />
      </span>
    );
  }
};
export default Expand;
