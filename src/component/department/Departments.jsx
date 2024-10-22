import { commerce, computerScience, science } from "../books/book"
import loadData from "../LoadData/loadData";
import './department.css'

export default function Departments() {
    const forCommerce = commerce();
    const forComputer = computerScience();
    const forScience = science();

    return (
        <>
            <div className="container">
                <h1>Sciece</h1>
                {
                 loadData(forScience)
                }
            </div>
            <div className="container">
                <h1>Computer Science</h1>
                {
                    loadData(forComputer)
                }
            </div>
            <div className="container">
                <h1>Commerce</h1>
                {
                    loadData(forCommerce)
                }
            </div>

        </>
    )
}
