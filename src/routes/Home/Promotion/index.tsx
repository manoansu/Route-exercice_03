import { Link } from "react-router-dom";
import Button from "../../../component/Button";
import Card from "../../../component/Card";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mb30 mt30">
            <Card title="Promotion Homepage" />
          </div>
          <div className="dflex">
            <Link to={`/sub`}>
              <Button text="I want Participate" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
