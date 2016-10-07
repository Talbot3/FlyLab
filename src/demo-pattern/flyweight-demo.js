/**
 * Created by goerver on 16-10-5.
 *
 * The objects participating in this pattern are:
 * Client -- In sample code: Computer
 * calls into FlyweightFactory to obtain flyweight objects
 * FlyweightFactory -- In sample code: FlyweightFactory
 * creates and manages flyweight objects
 * if requested, and a flyweight does not exist, it will create one
 * stores newly created flyweights for future requests
 * Flyweight -- In sample code: Flyweight
 * maintains intrinsic data to be shared across the application
 */
function Flyweight(make,model,processor) {
    this.make = make;
    this.model = model;
    this.processor = processor
}

var FlyWeightFactory = (function () {
    var flyweights = {};
    return {
        get:function (make,model,processor) {
            if(!flyweights[make+model]){
                flyweights[make+model] =
                    new Flyweight(make,model,processor);
            }
        },
        getCount:function () {
            var count = 0;
            for(var f in flyweights) count++;
            return count;
        }
    }
    
})();

function ComputerCollection() {
    var computers = {};
    var count = 0;
    return {
        add :function (make,model,processor,memory,tag) {
            computers[tag] = new Computer(make,model,processor,memory,tag);
            count++; // 实际只是添加的次数，并非是实际在内存中使用的对象　
        },
        get:function (tag) {
            return computers[tag];
        },
        // getCount:function () {
        //     return count
        // },
        getCount:function () {
            var count = 0;
            for(var c in computers) count++;
            return count;
        }
    }
}

var Computer = function (make,model,processor,memory,tag) {
    this.flyweight = FlyWeightFactory.get(make,model,processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
};


var log=(function () {
    var log = "";
    return {
        add:function (msg) {
            log+= msg + "\n";
        },
        show:function () {
            console.log(log);
            log="";
        }
    }
})();



var computers = new ComputerCollection();
computers.add("Dell","Studio XPS","Intel","5G","Y755P");
computers.add("Dell","Studio XPS","Intel","5G","Y755P");
computers.add("Dell","Studio XPS","Intel","5G","Y755P");
computers.add("Dell","Studio XPS","Intel","5G","Y755P");
computers.add("Dell","Studio XPS","Intel","5G","Y755P");

log.add("Computers: "+computers.getCount());
log.add("Flyweights: "+FlyWeightFactory.getCount());

log.show();