const formatDate =(datestring:string)=>{
    const date=new Date(datestring);
    const options={year:'numeric' as const,month:'short' as const};
    return date.toLocaleString('en-US',options);
}
export {formatDate};