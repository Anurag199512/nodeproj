req=require('request')

const geocode =(location,callback)=>{

    var url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(location)+'.json?access_token=pk.eyJ1IjoiYW51cmFnMTk5NSIsImEiOiJjanVhYmZ0NjgwMHlxNDRwOHRwMDg5ZXFiIn0.pIcvOgEL7LitgAunjjUsIQ';

    req({url:url1,json:true},(err,res)=>{
            if(err){
                callback('Error: no connection');
            }

            else if(res.body.features.length === 0){
                callback('Error: not able to find the location');
            }

            else{
                callback({
                    lattitude:res.body.features[0].center[0],
                    longitude:res.body.features[0].center[1],
                    locname:res.body.features[0].place_name
                })
            }
    })
}

const forecast=(latt,long,callback)=>{

    var url2='https://api.darksky.net/forecast/ce8010044f26274c5e43420b33266dfc/'+long+','+latt;
    

    req({url:url2,json:true},(err,req)=>{
      
        var  {temperature,precipProbability}=req.body.currently

        if(err){
            callback('Error: no connection');
        }

        else if(req.body.error){
            callback('Error: not existing location');
        }

    
        else{
                callback('\nNew temperature is : '+temperature+' and New  chances of rain '+precipProbability+'%')
        
        }
  
      })
}

module.exports={
    getco:    geocode,
    getreport: forecast
};
