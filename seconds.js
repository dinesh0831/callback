


setTimeout(() => 
{time=10;head();setTimeout(() => 
    {time="09";head();setTimeout(() => 
        {time="08",head();setTimeout(() => 
            {time="07";head();setTimeout(() => 
                {time="06";head();setTimeout(() => 
                    {time="05";head();setTimeout(() => 
                        {time="04";head();setTimeout(() => 
                            {time="03";head();setTimeout(() => 
                                {time="02";head();setTimeout(() => 
                                    {time="01";head();setTimeout(() => 
                                        {time="Happy Independence Day!!!";
                                            second=document.querySelector("h1");
                                            second.innerText=time;
                                            second.style.border="2px solid black"
                                            second.style.marginRight="30%"
                                            second.style.marginLeft="30%"
                                            second.style.marginTop="23%"
                                            second.style.paddingLeft="5rem"
                                            second.style.backgroundColor="lightblue"
                                            document.body.append(second);
                                        },1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


function head()
{
let second=document.querySelector("h1");
second.innerText=time;
second.style.border="2px solid black"
second.style.marginRight="30%"
second.style.marginLeft="30%"
second.style.marginTop="23%"
second.style.paddingLeft="15rem"
second.style.backgroundColor="lightblue";
document.body.append(second)

}