function CreateMatrix(strok,stolb) { 
    let arr=[]; 
        for(let i=0;i<strok;i++){ 
            arr[i]=[]; 
        for (let j=0;j<stolb;j++){ 
            arr[i][j]=0; 
            }; 
        }; 
        return arr; 
    }; 
    
    let a = CreateMatrix(9,9);

    function OstalKvadrat(matrix,x,y){ 
        let b=[1,2,3,4,5,6,7,8,9]; 
        for(let i=x;i<x+3;i++){ 
            for(let j=y;j<y+3;j++){ 
            let c=b; 
            // console.log(c); 
            let q = c[Math.floor(Math.random()*(c.length))+0]; 
            matrix[i][j]=q; 
            o=DeleteArray(b,q); 
        }; 
        }; 
    };
    OstalKvadrat(a,0,0);

    function DeleteArray (b,q){
        console.log(b); 
        console.log(q); 
    }