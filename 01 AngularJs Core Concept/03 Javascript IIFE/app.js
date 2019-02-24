(function () {
    var com = {};
    com.myDomain = {};
    com.myDomain.AProgrammer = {};
    com.myDomain.BProgrammer = {};

    com.myDomain.AProgrammer.utility = function () {
        console.log("Programmer A Utility");
    }

    com.myDomain.AProgrammer.utility();

    com.myDomain.BProgrammer.utility = function () {
        console.log("Programmer B Utility");
    }

    com.myDomain.BProgrammer.utility();

}());
