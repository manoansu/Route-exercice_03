import { Link } from "react-router-dom";
import Button from "../../../component/Button";
import Card from "../../../component/Card";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mb30 mt30">
            <Card title="Subscription Homepage" />
          </div>
          <div className="dflex">
            <Link to={`/promotion`}>
              <Button text="See Promotion" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
