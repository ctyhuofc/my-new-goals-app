const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/Task');
const cors =  require('cors');
const Goals = require('./models/Goal');
const Goal = require('./models/Goal');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/tasks/', function(req, res){
    Task.findAll().then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

app.get('/tasks/:id/', function(req, res){
    let id = req.params.id;
    Task.findByPk(id).then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err);
    });
});

app.post('/addtask/', function(req, res){
    let task = req.body;
    Task.create(task).then(function(result){
        res.redirect('/tasks/');
    }).catch(function(err){
        res.send(err);
    })
});

app.delete('/deletetask/:id', function(req, res){
    let id = req.params.id;
    Task.findByPk(id).then((result) => {
        result.destroy().then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err);
        });
    }).catch((err) => {
        res.send(err);
    });
});

  //Update status of a task
  app.patch('/updatetask/:id', function(req, res){
    let id = req.params.id;

    //Find the task
    Task.findByPk(id).then(function(result){
        //Change Task Status
        if(result){
            if(result.status === "Not Done"){
                result.status = "Done"
            }else if(result.status ==="Done"){
            result.status = "Not Done";
            }
            //Save changes to DB
            result.save().then(function(){
                res.send(result);
            }).catch(function(err){
                res.status(500).send(err);
            });
        }
        // else {
        //     res.status(404).send('Task record not found');
        // }
        }).catch(function(err){
            res.status(500).send(err);
        });
    });


    app.get('/goals/', function(req, res){
        Goal.findAll().then(function(result){
            res.status(200).send(result);
        }).catch(function(err){
            res.status(500).send(err);
        });
    });
    
    app.get('/goals/:id/', function(req, res){
        let id = req.params.id;
        Goal.findByPk(id).then(function(result){
            res.status(200).send(result);
        }).catch(function(err){
            res.status(500).send(err);
        });
    });
    
    app.post('/addgoal/', function(req, res){
        let goal = req.body;
        Goal.create(goal).then(function(result){
            res.redirect('/tasks/');
        }).catch(function(err){
            res.send(err);
        })
    });
    
    app.delete('/deletegoal/:id', function(req, res){
        let id = req.params.id;
        Goal.findByPk(id).then((result) => {
            result.destroy().then((result) => {
                res.send(result)
            }).catch((err) => {
                res.send(err);
            });
        }).catch((err) => {
            res.send(err);
        });
    });
    
      //Update status of a goal
      app.patch('/updategoal/:id', function(req, res){
        let id = req.params.id;
    
        //Find the goal
        Goal.findByPk(id).then(function(result){
            //Change status of goal
            if(result){
                if(result.status === "Not Done"){
                    result.status = "Done"
                }else if(result.status ==="Done"){
                result.status = "Not Done";
                }
                //Save changes to DB
                result.save().then(function(){
                    res.send(result);
                }).catch(function(err){
                    res.status(500).send(err);
                });
            }
            else {
                res.status(404).send('Goal record not found');
            }
            }).catch(function(err){
                res.status(500).send(err);
            });
        });
app.listen(3000, function(){
    console.log('Server running on port 3000...');
});

//  //Update status of a task
//  app.patch('updatetask/:id', function(req, res){
//     let id = req.params.id;

//     //Find the task
//     Task.findByPk(id).then(function(result){
//         //Check if student was found
//         if(result){
//             //Update student record
//             result.status = req.body.status;

//             //Save changes to DB
//             result.save().then(function(){
//                 res.redirect('/');
//             }).catch(function(err){
//                 res.status(500).send(err);
//             });
//         }
//         else {
//             res.status(404).send('Task record not found');
//         }
//         }).catch(function(err){
//             res.status(500).send(err);
//         });
//     });