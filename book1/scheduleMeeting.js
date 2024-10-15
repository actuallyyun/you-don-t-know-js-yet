const dayStart = '07:30'
const dayEnd = '17:45'

function scheduleMeeting(startTime, duration) {

//parse dayStart into a number
const dayStartNumber=parseTimeStringToMinutes(dayStart)
const dayEndNumber=parseTimeStringToMinutes(dayEnd)
const startTimeNumber=parseTimeStringToMinutes(startTime)
if(startTimeNumber<dayStartNumber||startTimeNumber>dayEndNumber){
    return false
}
const expectedEndTime=startTimeNumber+duration
if(expectedEndTime>dayEndNumber){
    return false
}
return true

}


function parseTimeStringToMinutes(timeString){
    if(timeString!=un){
        const timeStringArray=timeString.split(":")
        const timeNumber=parseInt(timeStringArray[0])*60+parseInt(timeStringArray[1])
        return timeNumber
        
    }else{
        console.error("must pass a string")
    }
}

console.log(scheduleMeeting("7:00",15))

console.log(scheduleMeeting("07:15",30))

console.log(scheduleMeeting("7:30",30))

console.log(scheduleMeeting("11:30",60))

console.log(scheduleMeeting("17:00",45))

console.log(scheduleMeeting("17:30",30))