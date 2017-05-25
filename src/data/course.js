
const course = [
    // semester1 success
   [   
        {"subject_id":"040203101","name":"MATHEMATICS I","weight":"3(3-0)"},
        {"subject_id":"040613101","name":"FUNDAMENTAL OF CS AND PROF ISSUES","weight":"3(2-1)"},
        {"subject_id":"040613102","name":"COMPUTER PROGRAMMING I","weight":"2(1-2)"},
        {"subject_id":"040613XXX","name":"SCI AND MATHS ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040613181","name":"DIGITAL CIRCUIT DESIGN","weight":"3(3-0)"},
        {"subject_id":"080103001","name":"ENGLISH I","weight":"3(3-0)"},
        {"subject_id":"080203XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        
    ],
    // semester2 success
    [
        {"subject_id":"040203102","name":"MATHEMATICS II","weight":"3(3-0)"},
        {"subject_id":"040613121","name":"COMPUTER PROGRAMMING II","weight":"3(3-0)"},
        {"subject_id":"040613191","name":"DISCRETE MATHEMATICS FOR COM","weight":"3(3-0)"},
        {"subject_id":"040433002","name":"FOOD IN DAILY LIFE","weight":"3(3-0)"},
        {"subject_id":"040613182","name":"DIGITAL AND LOGIC SYSTEMS","weight":"3(3-0)"},
        {"subject_id":"080103002","name":"ENGLISH II","weight":"3(3-0)"},
    ],
     // semester3 success
    [
        {"subject_id":"040203201","name":"DIFFERENTIAL EQUATIONS","weight":"3(3-0)"},
        {"subject_id":"040503011","name":"STATISTICS FOR ENG AND SCI","weight":"3(3-0)"},
        {"subject_id":"040613202","name":"DATA STRICTURES AND ALGORITHM","weight":"3(3-0)"},
        {"subject_id":"040613222","name":"OBJECT-ORIENTED PROGRAMMING","weight":"3(3-0)"},
        {"subject_id":"04XXXXXXX","name":"SCIENCES & MATH ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"080103XXX","name":"LANGUAGE ELECTIVE COURSE","weight":"3(3-0)"},
    ],
     // semester4 success
    [
        {"subject_id":"040203202","name":"MATRICES AND VECTORS ANALY","weight":"3(3-0)"},
        {"subject_id":"040613241","name":"SYSTEM ANALYSIS AND DESIGN","weight":"3(3-0)"},
        {"subject_id":"040613272","name":"COMPUTER ORGANIZATION AND AR","weight":"3(3-0)"},
        {"subject_id":"040613292","name":"DESIGN AND ANALYSIS OF ALGOR","weight":"3(3-0)"},
        {"subject_id":"04XXXXXXX","name":"SCIENCES & MATH ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"080103XXX","name":"LANGUAGE ELECTIVE COURSE","weight":"3(3-0)"},
    ],
     // semester5 success
    [
        {"subject_id":"040613331","name":"DATABASE SYSTEM","weight":"3(3-0)"},
        {"subject_id":"040613351","name":"COMPUTER NETWORK","weight":"3(3-0)"},
        {"subject_id":"040613344","name":"SOFTWARE ENGINEER","weight":"3(3-0)"},
        {"subject_id":"0406XXXXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040603XXX","name":"PHYSICAL EDUCATION ELECTIVE COURSE","weight":"3(3-0)"},
    ],
    // semester6 success
    [
        {"subject_id":"040613325","name":"PRINCIPLES OF PROGRAMMING LA","weight":"3(3-0)"},
        {"subject_id":"040613349","name":"HUMAN COMPUTER INTERACTION","weight":"3(3-0)"},
        {"subject_id":"040613374","name":"OPERATING SYSTEM","weight":"3(3-0)"},
        {"subject_id":"040613393","name":"NUMERICAL METHODS","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040603XXX","name":"PHYSICAL EDUCATION ELECTIVE COURSE","weight":"3(3-0)"},
    ],
    // semester7
    [
        {"subject_id":"","name":"Training (260 hours)","weight":""}
    ],
    // semester8
    [
        {"subject_id":"040613404","name":"SPECIAL PROJECT I","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"XXXXXXXXX","name":"FREE ELECTIVE COURSE","weight":"3(3-0)"},
        
    ],
    // semester9
    [
        {"subject_id":"040613405","name":"SPECIAL PROJECT II","weight":"3(3-0)"},
        {"subject_id":"040613XXX","name":"ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"040603XXX","name":"HUMANTIES ELECTIVE COURSE","weight":"3(3-0)"},
        {"subject_id":"XXXXXXXXX","name":"FREE ELECTIVE COURSE","weight":"3(3-0)"},
        
    ],
]
const datacheck = [
    {"subject_id":"040613405","child":["040613404"]},
    {"subject_id":"040613325","child":["040613121","040613272"]},
    {"subject_id":"040613374","child":["040613101"]},
    {"subject_id":"040613393","child":["040203101"]},
    {"subject_id":"040613331","child":["040613202"]},
    {"subject_id":"040613344","child":["040613241"]},
    {"subject_id":"040203202","child":["040203102"]},
    {"subject_id":"040613241","child":["040613101"]},
    {"subject_id":"040613292","child":["040613202"]},
    {"subject_id":"040203201","child":["040203102"]},
    {"subject_id":"040613202","child":["040613121"]},
    {"subject_id":"040613222","child":["040613121"]},
    {"subject_id":"040203102","child":["040203101"]},
    {"subject_id":"040613121","child":["040613101"]},
    {"subject_id":"040613182","child":["040613181"]},
    {"subject_id":"080103002","child":["080103001"]},
    
]
export {course,datacheck}