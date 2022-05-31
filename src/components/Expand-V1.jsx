import { useState } from "react";

const Expandv1 = ({ veggies }) => {
  const [exp1, setExp] = useState(false);

  veggies.map((exp) => {
    console.log(exp.name);
    if (!exp.isexpand) {
      console.log(exp.name);
      return <div>{exp.name}</div>;
    }
    return (
      <>
        <span>Hi I am</span>
        <span onClick={() => setExp(!exp1)}>Hi I am {exp.name} </span>

        <div style={{ display: exp1 ? "block" : "none", paddingLeft: 15 }}>
          <div>
            {exp.child.map((ex) => {
              console.log(ex.name);
              return <Expandv1 veggies={ex} />;
            })}
          </div>
        </div>
      </>
    );
  });
};
export default Expandv1;
