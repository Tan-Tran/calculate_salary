import classes from '../UI/Table.module.css'

const Table = (props) =>{
    const dataSource = props.dataSource
    const columns = props.columns
    const className = props.className
    const cssClass = props.cssTable
    const {top, left} = props.theadType
    return(
        <>
            {(top && !left) && <table className={className}>
                <thead>
                    <tr className={classes[cssClass.thead]}>
                        {columns.map((column) =>{
                            return <th key={column.key} >{column.title}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((data) =>{
                        return (
                            <tr key={data.key}>
                                {columns.map((column) =>{
                                    return <td key={data.key + column.key}>{data[column.dataIndex]}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
            {(!top && left) && <table className={className}>
                <tbody>
                    {columns.map((column) =>{
                        console.log(dataSource[column.dataIndex])
                        return(
                            <tr key={column.key} className={classes[column.className]}>
                                <th>{column.title}</th>
                                <td>{dataSource[column.dataIndex]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
        </>
    )
}

export default Table