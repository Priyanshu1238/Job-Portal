const formatDate =(datestring:string)=>{
    const date=new Date(datestring);
    const options={year:'numeric' as const,month:'short' as const};
    return date.toLocaleString('en-US',options);
}

function timeAgo(time:any) {
    const now = new Date();
    const postDate=new Date(time);
    // const date = new Date(timestamp);
    const seconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
  
    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    }
  
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    }
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }
  
    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    }
  
    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    }
  
    const years = Math.floor(months / 12);
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }
  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);

    })
}
const formatInterviewTime=(dateStr:any)=>{
  const date=new Date(dateStr);
  return date.toLocaleString('en-US',{
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    hour12:true
  });
}
function openResumeInNewTab(base64String:string) {
  // const b64 = base64Data.split(",").pop();
  

  const byteChars = atob(base64String);
  const byteNumbers=new Array(byteChars.length)
  // const byteNumbers = Array.from(byteChars, ch => ch.charCodeAt(0));
  for(let i=0;i<byteChars.length;i++)
  {
    byteNumbers[i]=byteChars.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/pdf" });

  const blobUrl = URL.createObjectURL(blob);
  window.open(blobUrl, "_blank");

  
}
export {formatDate,timeAgo,getBase64,formatInterviewTime,openResumeInNewTab};