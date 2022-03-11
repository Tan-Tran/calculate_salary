import classes from './PersonIncomeTaxDetailTable.module.css'

const PersonIncomeTaxDetailTable = ({personIncomeTaxData}) =>{
    return(
        <div className={classes.content}>
            <div className={classes.title}>(*) Detail of personal income tax (USD)</div>        
            <table className={classes.datalist}>            		
                <tbody>
                    <tr className={classes['row-note']}>
                        <th>The taxable</th>
                        <th>The tax rate</th>
                        <th>The payment</th>
                    </tr>
                    <tr>
                        <td>To 5 million VND</td>
                        <td>5%</td>
                        <td>{personIncomeTaxData.fivePercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 5 million VND to 10 million VND</td>
                        <td>10%</td>
                        <td>{personIncomeTaxData.tenPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 10 million VND to 18 million VND</td>
                        <td>15%</td>
                        <td>{personIncomeTaxData.fifteenPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 18 million VND to 32 million VND</td>
                        <td>20%</td>
                        <td>{personIncomeTaxData.twentyPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 32 million VND to 52 million VND</td>
                        <td>25%</td>
                        <td>{personIncomeTaxData.twentyFivePercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 52 million VND to 80 million VND</td>
                        <td>30%</td>
                        <td>{personIncomeTaxData.thirtyPercent}</td>
                    </tr>
                    <tr>
                        <td>Upper 80 million VND</td>
                        <td>35%</td>
                        <td>{personIncomeTaxData.thirtyFivePercent}</td>
                    </tr>                
                </tbody>
            </table>
        </div>
    )
}

export default PersonIncomeTaxDetailTable