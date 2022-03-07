import classes from './PersonIncomeTaxDetail.module.css'

const PersonIncomeTaxDetail = ({personIncomeTax}) =>{
    return(
        <div className={classes.content}>            
            <table className={classes.datalist}>            		
                <tbody>
                    <tr className={classes.rownote}>
                        <th>The taxable</th>
                        <th>The tax rate</th>
                        <th>The payment</th>
                    </tr>
                    <tr>
                        <td>To 5 million VND</td>
                        <td>5%</td>
                        <td>{personIncomeTax.fivePercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 5 million VND to 10 million VND</td>
                        <td>10%</td>
                        <td>{personIncomeTax.tenPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 10 million VND to 18 million VND</td>
                        <td>15%</td>
                        <td>{personIncomeTax.fifteenPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 18 million VND to 32 million VND</td>
                        <td>20%</td>
                        <td>{personIncomeTax.twentyPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 32 million VND to 52 million VND</td>
                        <td>25%</td>
                        <td>{personIncomeTax.twentyFivePercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 52 million VND to 80 million VND</td>
                        <td>30%</td>
                        <td>{personIncomeTax.thirtyPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 80 million VND</td>
                        <td>35%</td>
                        <td>{personIncomeTax.thirtyFivePercent}</td>
                    </tr>                
                </tbody>
            </table>
        </div>
    )
}

export default PersonIncomeTaxDetail