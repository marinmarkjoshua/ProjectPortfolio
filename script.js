// Student-level Comlab Activities Data
const defaultComlabData = {
    midterm: [
        {
            id: 101,
            title: "Activity 1",
            date: "July 07, 2026",
            tools: "HTML, CSS",
            icon: "monitor",
            img: "activity1.png",
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>MY INFORMATION</title>\n    <style>\n        html {\n            scroll-behavior: smooth;\n            font-family: Arial, sans-serif;\n        }\n\n        body {\n            background-color: #e0f2fe;\n            margin: 0;\n            padding: 0;\n            color: #333;\n        }\n\n        nav {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            background-color: #0284c7;\n            padding: 15px 0;\n            text-align: center;\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n            z-index: 1000;\n        }\n\n        nav a {\n            color: white;\n            text-decoration: none;\n            font-weight: bold;\n            font-size: 18px;\n            margin: 0 15px;\n            padding: 8px 16px;\n            border-radius: 20px;\n            transition: background 0.3s ease;\n        }\n\n        nav a:hover {\n            background-color: #0369a1;\n        }\n\n        .container {\n            max-width: 800px;\n            margin: 100px auto 40px auto;\n            padding: 0 20px;\n        }\n\n        section {\n            background-color: white;\n            padding: 30px;\n            margin-bottom: 40px;\n            border-radius: 12px;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n        }\n\n        h1, h2, h3 {\n            text-align: center;\n        }\n\n        h1 {\n            color: #0369a1;\n            margin-top: 0;\n        }\n\n        hr {\n            border: 0;\n            height: 1px;\n            background: #cbd5e1;\n            margin: 20px 0;\n        }\n\n        .highlight {\n            color: #e11d48;\n            font-weight: bold;\n        }\n\n        .profile-img {\n            width: 200px;\n            height: 200px;\n            object-fit: cover;\n            border-radius: 50%;\n            display: block;\n            margin: 15px auto;\n            border: 4px solid #0284c7;\n        }\n\n        table {\n            width: 100%;\n            border-collapse: collapse;\n            margin: 20px 0;\n        }\n\n        th, td {\n            border: 1px solid #cbd5e1;\n            padding: 10px;\n            text-align: center;\n        }\n\n        th {\n            background-color: #0284c7;\n            color: white;\n        }\n\n        caption {\n            font-weight: bold;\n            font-size: 18px;\n            margin-bottom: 10px;\n            color: #0369a1;\n        }\n\n        form {\n            background-color: #f8fafc;\n            padding: 15px;\n            border-radius: 8px;\n            margin-bottom: 15px;\n            border: 1px solid #e2e8f0;\n        }\n\n        input[type=\"text\"],\n        input[type=\"password\"],\n        textarea,\n        select {\n            padding: 8px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            margin-top: 5px;\n        }\n\n        input[type=\"submit\"],\n        input[type=\"reset\"],\n        input[type=\"button\"] {\n            background-color: #0284c7;\n            color: white;\n            border: none;\n            padding: 8px 16px;\n            border-radius: 5px;\n            cursor: pointer;\n            margin-right: 5px;\n        }\n\n        input[type=\"submit\"]:hover,\n        input[type=\"reset\"]:hover,\n        input[type=\"button\"]:hover {\n            background-color: #0369a1;\n        }\n\n        .back-to-top {\n            text-align: center;\n            display: block;\n            margin-top: 20px;\n            color: #0284c7;\n            text-decoration: none;\n            font-weight: bold;\n        }\n    </style>\n</head>\n\n<body>\n    <nav>\n        <a href=\"#home\">Home</a>\n        <a href=\"#myinfo\">My Information</a>\n        <a href=\"#journal\">Journal</a>\n        <a href=\"#others\">Others</a>\n    </nav>\n\n    <div class=\"container\">\n        <section id=\"home\">\n            <h1>Welcome to My Personal Information</h1>\n            <hr>\n            <h2>Hellooo!</h2>\n            <h3>Welcome to My simple Website. This website contains Information about me.</h3>\n            <img class=\"profile-img\" src=\"profile.png\" alt=\"Profile Picture\">\n            <h1>Joshua</h1>\n        </section>\n\n        <section id=\"myinfo\">\n            <h1>My Information</h1>\n            <hr>\n            <div>\n                <h2>Name: <span class=\"highlight\">Mark Joshua Marin</span></h2>\n                <h2>Age: <span class=\"highlight\">22</span></h2>\n                <h2>Address: <span class=\"highlight\">Abangan Sur</span></h2>\n            </div>\n            <hr>\n            <h1>School Info</h1>\n            <div>\n                <h2>School Name: <span class=\"highlight\">Pambayang Dalubhasaan ng Marilao</span></h2>\n                <h2>Student No.: <span class=\"highlight\">2023-003449</span></h2>\n                <h2>Address: <span class=\"highlight\">Abangan Sur</span></h2>\n            </div>\n            <hr>\n            <img class=\"profile-img\" src=\"profile.png\" alt=\"Profile Picture\">\n            <h1>Joshua</h1>\n        </section>\n\n        <section id=\"journal\">\n            <h1>My Journals</h1>\n            <hr>\n            <h3>me (Numbered List):</h3>\n            <ol>\n                <li>Mark Joshua Marin</li>\n                <li>Age 22</li>\n                <li>From Abangan Sur</li>\n                <li>I love playing Online Games</li>\n                <li>I love my self</li>\n            </ol>\n            <hr>\n            <h3>me (Bullet List):</h3>\n            <ul>\n                <li>Mark Joshua Marin</li>\n                <li>Age 22</li>\n                <li>From Abangan Sur</li>\n                <li>I love playing Online Games</li>\n                <li>I love my self</li>\n            </ul>\n            <hr>\n            <h3>me (Custom Numbering):</h3>\n            <ol start=\"13\">\n                <li>Mark Joshua Marin</li>\n                <li>Age 22</li>\n                <li>From Abangan Sur</li>\n                <li>I love playing Online Games</li>\n                <li>I love my self</li>\n            </ol>\n            <hr>\n            <dl>\n                <dt><b>I'm Mark</b></dt>\n                <dd>I'm 22y/o, from Abangan Sur</dd>\n                <br>\n                <dt><b>What I love</b></dt>\n                <dd>Playing games, and playing guitar</dd>\n            </dl>\n        </section>\n\n        <section id=\"others\">\n            <h1>Others</h1>\n            <hr>\n            <table>\n                <caption>GRADE REPORT</caption>\n                <tr>\n                    <th>SUBJECT CODE</th>\n                    <th>SUBJECT DESCRIPTION</th>\n                    <th>GRADE</th>\n                    <th>REMARKS</th>\n                </tr>\n                <tr>\n                    <td>IT321</td>\n                    <td>Web Development</td>\n                    <td>1.50</td>\n                    <td>Passed</td>\n                </tr>\n                <tr>\n                    <td>IT322</td>\n                    <td>Multimedia Systems</td>\n                    <td>1.75</td>\n                    <td>Passed</td>\n                </tr>\n                <tr>\n                    <td>IT323A</td>\n                    <td>Software Engineering</td>\n                    <td>2.0</td>\n                    <td>Passed</td>\n                </tr>\n                <tr>\n                    <td>HUM</td>\n                    <td>Humanities</td>\n                    <td>5.0</td>\n                    <td>Failed</td>\n                </tr>\n            </table>\n            <br>\n            <form>\n                <label>Email:</label><br>\n                <input type=\"text\" name=\"first_name\" /><br><br>\n                <label>Password:</label><br>\n                <input type=\"password\" name=\"last_name\" />\n            </form>\n            <form>\n                <label>Description :</label><br>\n                <textarea rows=\"3\" cols=\"40\" name=\"description\" placeholder=\"Enter description here...\"></textarea>\n            </form>\n            <form>\n                <input type=\"checkbox\" name=\"maths\" value=\"on\"> Maths\n                <input type=\"checkbox\" name=\"physics\" value=\"on\"> Physics\n            </form>\n            <form>\n                <input type=\"radio\" name=\"subject\" value=\"maths\"> Maths\n                <input type=\"radio\" name=\"subject\" value=\"physics\"> Physics\n            </form>\n            <form>\n                <select name=\"dropdown\">\n                    <option value=\"Maths\" selected>Maths</option>\n                    <option value=\"Physics\">Physics</option>\n                </select>\n            </form>\n            <form>\n                <input type=\"submit\" name=\"submit\" value=\"Submit\" />\n                <input type=\"reset\" name=\"reset\" value=\"Reset\" />\n                <input type=\"button\" name=\"ok\" value=\"OK\" />\n                <input type=\"image\" name=\"imagebutton\" src=\"/html/images/logo.png\" alt=\"Submit Image\" style=\"vertical-align: middle; width: 30px;\" />\n            </form>\n            <a class=\"back-to-top\" href=\"#home\">↑ Back to Top</a>\n        </section>\n    </div>\n</body>\n\n</html>"
        },
        {
            id: 102,
            title: "Activity 2",
            date: "July 14, 2026",
            tools: "HTML",
            icon: "monitor",
            img: "activity2.png",
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Student Personal Website</title>\n    <style>\n        html {\n            scroll-behavior: smooth;\n        }\n\n        body {\n            margin: 0;\n            font-family: Arial, sans-serif;\n        }\n    </style>\n</head>\n\n<body>\n\n    <!-- HEADER -->\n    <header style=\"text-align: center; background-color: cyan; padding: 60px;\">\n        <h1>Student Personal Website</h1>\n        <p>Welcome to my Website</p>\n    </header>\n\n    <!-- NAVIGATION (Anchor Links para sa Single Page) -->\n    <nav\n        style=\"background-color: pink; padding: 25px; display: flex; justify-content: center; gap: 25px; position: sticky; top: 0; z-index: 1000;\">\n        <a href=\"#home\">Home</a>\n        <a href=\"#register\">Registration Form</a>\n        <a href=\"#grade\">Grade Table</a>\n        <a href=\"#profile\">My Profile</a>\n    </nav>\n\n    <!-- HOME SECTION -->\n    <section id=\"home\">\n        <div style=\"display: flex; flex-wrap: wrap;\">\n            <div style=\"background-color: yellow; padding: 80px; flex: 10; min-width: 250px;\">\n                <h1>Welcome!</h1>\n                <br>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non sit, quasi asperiores harum\n                    cupiditate.</p>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non sit.</p>\n            </div>\n\n            <aside style=\"background-color: rgb(106, 226, 106); padding: 80px; flex: 5; min-width: 250px;\">\n                <h1>Announcement</h1>\n                <br>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, facere?</p>\n                <p>Lorem ipsum dolor sit amet consectetur?</p>\n            </aside>\n        </div>\n    </section>\n\n    <!-- REGISTRATION FORM SECTION -->\n    <section id=\"register\" style=\"padding: 50px 20px; background-color: #f9f9f9;\">\n        <h2 style=\"text-align: center;\">Registration Form</h2>\n        <main\n            style=\"max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);\">\n            <form action=\"#\" method=\"post\">\n                <p>\n                    <label for=\"student-name\">Student Name</label><br>\n                    <input type=\"text\" id=\"student-name\" name=\"student-name\"\n                        style=\"width: 100%; padding: 8px; margin-top: 5px;\">\n                </p>\n\n                <p>\n                    <label for=\"student-number\">Student Number</label><br>\n                    <input type=\"text\" id=\"student-number\" name=\"student-number\"\n                        style=\"width: 100%; padding: 8px; margin-top: 5px;\">\n                </p>\n\n                <p>\n                    <label for=\"email\">Email</label><br>\n                    <input type=\"text\" id=\"email\" name=\"email\" style=\"width: 100%; padding: 8px; margin-top: 5px;\">\n                </p>\n\n                <fieldset style=\"margin-bottom: 15px; padding: 10px;\">\n                    <legend>Gender</legend>\n                    <input type=\"radio\" id=\"male\" name=\"gender\">\n                    <label for=\"male\">Male</label>\n                    &nbsp;&nbsp;\n                    <input type=\"radio\" id=\"female\" name=\"gender\">\n                    <label for=\"female\">Female</label>\n                </fieldset>\n\n                <p>\n                    <label for=\"course\">Course</label><br>\n                    <select name=\"course\" id=\"course\" style=\"width: 100%; padding: 8px; margin-top: 5px;\">\n                        <option value=\"BSIT\">BSIT</option>\n                        <option value=\"BSCS\">BSCS</option>\n                        <option value=\"BSCPE\">BSCPE</option>\n                    </select>\n                </p>\n\n                <p style=\"text-align: center; margin-top: 20px;\">\n                    <input type=\"submit\" value=\"Register\"\n                        style=\"padding: 10px 20px; background: #0284c7; color: white; border: none; cursor: pointer;\">\n                </p>\n            </form>\n        </main>\n    </section>\n\n    <!-- GRADE TABLE SECTION -->\n    <section id=\"grade\" style=\"padding: 50px 20px; background-color: #fff;\">\n        <div style=\"max-width: 600px; margin: 0 auto;\">\n            <div style=\"text-align: center; background-color: cyan; padding: 20px; margin-bottom: 20px;\">\n                <h2>Grade Report</h2>\n            </div>\n\n            <div style=\"margin-bottom: 20px;\">\n                <p><b>Student Name:</b> Marin</p>\n                <p><b>Course:</b> BSIT</p>\n                <p><b>Year Level:</b> 3rd year</p>\n            </div>\n\n            <table border=\"1\" cellpadding=\"10\" cellspacing=\"0\"\n                style=\"width: 100%; text-align: center; border-collapse: collapse;\">\n                <thead>\n                    <tr style=\"background-color: #eee;\">\n                        <th>Subject Code</th>\n                        <th>Subject Name</th>\n                        <th>Units</th>\n                        <th>Grade</th>\n                        <th>Remarks</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>CS301</td>\n                        <td>Web Dev</td>\n                        <td>3</td>\n                        <td>1.25</td>\n                        <td>Failed</td>\n                    </tr>\n                    <tr>\n                        <td>CS302</td>\n                        <td>Advanced Programming</td>\n                        <td>3</td>\n                        <td>1.25</td>\n                        <td>Passed</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan=\"3\" style=\"text-align: right;\"><strong>General Avg.</strong></td>\n                        <td colspan=\"2\"><strong>1.24</strong></td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n    </section>\n\n    <!-- PROFILE SECTION -->\n    <section id=\"profile\">\n        <div style=\"display: flex;\">\n            <div style=\"background-color: yellow; padding: 100px; flex: 10; text-align: center;\">\n                <h1>I'm Mark Joshua Marin</h1>\n                <br><br>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non sit, quasi asperiores harum\n                    cupiditate.</p>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non sit.</p>\n            </div>\n        </div>\n    </section>\n\n    <!-- FOOTER -->\n    <footer style=\"background-color: rgb(207, 158, 66); padding: 50px; text-align: center; color: white;\">\n        Copyright &copy; 2026\n    </footer>\n\n</body>\n\n</html>"
        },
        {
            id: 103,
            title: "Activity 4",
            date: "July 21, 2026",
            tools: "HTML, CSS",
            icon: "monitor",
            img: "activity4.png",
            code: "/* --- index.html --- */\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Personal</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n    <header>\n        <h1>My Personal Website</h1>\n        <p>Welcome to my Personal Student portal</p>\n    </header>\n\n    <nav>\n        <ul>\n            <li><a href=\"Main.html\">HOME</a></li>\n            <li><a href=\"registration.html\">REGISTRATION</a></li>\n            <li><a href=\"\">GRADES</a></li>\n            <li><a href=\"\">PROFILE</a></li>\n        </ul>\n    </nav>\n\n    <div class=\"container\">\n        <section class=\"content\">\n            <h1>Welcome!</h1>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quas.</p>\n            <p>Lorem ipsum dolor sit amet.</p>\n        </section>\n\n        <aside class=\"sidebar\">\n            <h1>Announcement </h1>\n            <ul>\n                <li>Laboratory</li>\n                <li>Apply External CSS</li>\n                <li>Use Flexbox</li>\n                <li>Sticky Navigation</li>\n            </ul>\n        </aside>\n    </div>\n\n    <footer>\n        CopyRight@12325123\n    </footer>\n</body>\n\n</html>\n\n/* --- register.html --- */\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>REGISTRATION</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<body>\n    <header>\n        <h1>My Personal Website</h1>\n        <p>Welcome to my Personal Student portal</p>\n    </header>\n\n    <nav>\n        <ul>\n            <li><a href=\"Main.html\">HOME</a></li>\n            <li><a href=\"registration.html\">REGISTRATION</a></li>\n            <li><a href=\"\">GRADES</a></li>\n            <li><a href=\"\">PROFILE</a></li>\n        </ul>\n    </nav>\n\n    <form class=\"register\">\n        <h1>Student registration</h1>\n        <br><br>\n        <p>Student Name</p>\n        <input type=\"text\">\n        <br><br>\n        <p>Email</p>\n        <input type=\"Email\">\n        <br><br>\n        <p>Password</p>\n        <input type=\"password\">\n        <br><br>\n        <p>Gender</p>\n        <input type=\"radio\" name=\"Gender\">Male\n        <input type=\"radio\" name=\"Gender\">Female\n        <br><br>\n        <p>Course</p>\n        <select>\n            <option value=\"\">BSIT</option>\n            <option value=\"\">BSCS</option>\n            <option value=\"\">BSEDUC</option>\n            <option value=\"\">BSOAD</option>\n        </select>\n        <br><br>\n        <p>Skills</p>\n        <input type=\"checkbox\">HTML\n        <input type=\"checkbox\">CSS\n        <input type=\"checkbox\">JAVA\n        <br><br>\n        <p>Profile</p>\n        <input type=\"file\">\n        <br><br>\n        <p>Address</p>\n        <textarea rows=\"5\" cols=\"50\" placeholder=\"enter here.....\"></textarea> <br>\n        <input type=\"submit\">\n        <input type=\"reset\">\n        <br><br>\n    </form>\n\n    <footer>\n        CopyRight@12325123\n    </footer>\n</body>\n\n</html>\n\n/* --- style.css --- */\n* {\n    margin: auto;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background-color: beige;\n}\n\nheader {\n    background-color: aliceblue;\n    color: black;\n    text-align: center;\n    padding: 30px;\n}\n\nheader h1 {\n    font-size: 30px;\n}\n\nheader p {\n    font-size: 15px;\n}\n\nnav ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    padding: 25px;\n    background-color: bisque;\n}\n\nnav ul li a {\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n}\n\n.container {\n    display: flex;\n    gap: 20px;\n    padding: 20px;\n}\n\n.content {\n    flex: 3;\n    padding: 20px;\n    background-color: aqua;\n    border-radius: 6px;\n}\n\n.content h1 {\n    margin-bottom: 10px;\n}\n\n.content p {\n    margin-top: 5px;\n}\n\n.sidebar {\n    flex: 1;\n    background-color: aquamarine;\n    padding: 20px;\n    border-radius: 8px;\n}\n\n.sidebar h1 {\n    margin-bottom: 10px;\n}\n\n.sidebar ul {\n    padding-left: 10px;\n}\n\nfooter {\n    background-color: blanchedalmond;\n    text-align: center;\n    padding: 50px;\n    margin-top: 20px;\n    font-weight: bold;\n}\n\nform {\n    text-align: center;\n    background-color: aliceblue;\n    padding: 10px;\n    justify-content: center;\n    width: 600px;\n    border-radius: 10px;\n    border: 1px solid black;\n}"
        }
    ],
    finals: [
        {
            id: 201,
            title: "Activity 2",
            date: "Sept 22, 2026",
            tools: "HTML, CSS, JS",
            icon: "monitor",
            img: "factivity2.png",
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Website</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n\n<style>\n    body {\n        text-align: center;\n        margin-top: 25px;\n        font-family: Arial, Helvetica, sans-serif;\n        background-color: rgb(174, 214, 151);\n    }\n\n    button {\n        background-color: rgb(143, 160, 160);\n        color: rgb(197, 206, 214);\n        border: 1;\n        border-radius: 10px;\n        padding: 15px 35px;\n        font-size: bold;\n        box-shadow: 5px 4px rgb(65, 62, 62);\n        position: relative;\n        margin: 10px;\n    }\n\n    button:active {\n        top: 5px;\n        left: 4px;\n        box-shadow: none;\n    }\n\n    #message {\n        font-weight: bold;\n        font-size: 24px;\n        padding: 30px;\n        color: rgb(21, 51, 51);\n    }\n</style>\n\n<body>\n    <h1>JavaScript Demo</h1>\n\n    <button id=\"loadBtn\">\n        Load\n    </button>\n\n    <button id=\"changeBtn\">\n        Change\n    </button>\n\n    <p id=\"message\">Waiting...</p>\n\n    <p id=\"profile\">Profile</p>\n    <p id=\"grade\">Grade</p>\n    <p id=\"schedule\">Schedules</p>\n\n    <script src=\"script.js\"></script>\n</body>\n\n</html>\n\n/* ================= script.js ================= */\nconst message = document.getElementById(\"message\");\nconst Button = document.getElementById(\"loadBtn\");\nconst Buttons = document.getElementById(\"changeBtn\");\n\nconst profile = document.getElementById(\"profile\");\nconst grade = document.getElementById(\"grade\");\nconst schedule = document.getElementById(\"schedule\");\n\nchangeBtn.addEventListener(\"click\", function () {\n    changeBtn.style.backgroundColor = \"blue\";\n    loadBtn.style.backgroundColor = \"red\";\n    document.body.style.backgroundColor = \"lightblue\";\n});\n\nfunction showMessage() {\n    return new Promise(function (resolve) {\n        setTimeout(function () {\n            resolve(\"Checking Account...\");\n        }, 2000);\n    });\n}\n\nButton.addEventListener(\"click\", function () {\n    message.innerHTML = \"Loading...\";\n    message.style.color = \"yellow\";\n\n    showMessage()\n        .then(function (result) {\n            message.innerHTML = result;\n\n            return new Promise(function (resolve) {\n                setTimeout(function () {\n                    resolve(\"Loading Profile...\");\n                }, 3000);\n            });\n        })\n        .then(function (result) {\n            message.innerHTML = result;\n\n            return new Promise(function (resolve) {\n                setTimeout(function () {\n                    resolve(\"Welcome!\");\n                }, 4000);\n            });\n        })\n        .then(function (result) {\n            message.innerHTML = result;\n        });\n});\n\nchangeBtn.addEventListener(\"click\", function () {\n    profile.innerHTML = \"Profile: Waiting..\";\n    grade.innerHTML = \"Grades: Waiting..\";\n    schedule.innerHTML = \"Schedule: Waiting..\";\n\n    const ProfilesPromise = new Promise(function (resolve) {\n        setTimeout(function () {\n            profile.innerHTML = \"Profile: Loaded\";\n            resolve();\n        }, 1000);\n    });\n\n    const GradePromise = new Promise(function (resolve) {\n        setTimeout(function () {\n            grade.innerHTML = \"Grades: Loaded\";\n            resolve();\n        }, 2000);\n    });\n\n    const SchedulesPromise = new Promise(function (resolve) {\n        setTimeout(function () {\n            schedule.innerHTML = \"Schedules: Loaded\";\n            resolve();\n        }, 3000);\n    });\n\n    Promise.all([ProfilesPromise, GradePromise, SchedulesPromise]);\n});"
        },
        {
            id: 202,
            title: "Activity 3",
            date: "Oct 06, 2026",
            tools: "HITML, CSS, JS",
            icon: "monitor",
            img: "factivity3.png",
            code: "<!-- ================= index.html ================= -->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n    <script src=\"https://code.jquery.com/jquery-3.7.1.min.js\"></script>\n</head>\n\n<body>\n\n    <div class=\"maincontainer\">\n        <div class=\"Profile\">\n            <h1 id=\"title\">Student Profile</h1>\n            <p class=\"profile1\">Welcome to my amazing Profile</p>\n        </div><br>\n\n        <div class=\"Student-info\">\n            <p id=\"name\">Student Name: Mark Joshua Marin</p>\n            <p id=\"course\">Section: 31A</p>\n            <p id=\"year-level\">Course: BSIT</p>\n        </div><br>\n\n        <div class=\"allBtn\">\n            <button id=\"btn1\">Change Title</button>\n            <button id=\"btn2\">Show Profile</button>\n            <button id=\"btn3\">Hide Profile</button>\n        </div><br>\n\n        <h3>State your Activity</h3>\n        <br>\n\n        <div>\n            <h5 style=\"color: rgb(45, 63, 46);\">Choose Course</h5>\n            <select name=\"\" id=\"course\">\n                <option value=\"none\">---Select Corse---</option>\n                <option value=\"\">BSIT</option>\n                <option value=\"\">BSCS</option>\n                <option value=\"\">BSLED</option>\n            </select>\n        </div>\n        <br>\n\n        <table border=\"2\" id=\"table\">\n            <tr>\n                <th>Number</th>\n                <th>Name</th>\n                <th>Course</th>\n                <th>Year</th>\n            </tr>\n\n            <tr>\n                <td>1</td>\n                <td>Suge</td>\n                <td>BSIT</td>\n                <td>1st</td>\n            </tr>\n\n            <tr>\n                <td>2</td>\n                <td>Rene</td>\n                <td>BSCS</td>\n                <td>2nd</td>\n            </tr>\n        </table><br>\n\n        <p>End of Student List</p><br>\n        <button id=\"btn4\"> Apply Old Row</button>\n        <button id=\"btn5\"> Apply Even Row</button>\n\n    </div>\n\n    <script src=\"script.js\"></script>\n</body>\n\n</html>\n\n/* ================= style.css ================= */\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-color: antiquewhite;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 30px;\n    text-align: center;\n}\n\n.maincontainer {\n    border: 3px solid black;\n    padding: 20px;\n    border-radius: 30px;\n}\n\n.Profile {\n    color: rgb(47, 78, 78);\n}\n\n.profile1 {\n    font-size: 10px;\n}\n\n.Student-info {\n    font-size: 12px;\n}\n\nbutton {\n    border: none;\n    padding: 10px;\n    border-radius: 10px;\n    background-color: rgb(126, 179, 226);\n}\n\n#table {\n    margin: auto;\n}\n\n/* ================= script.js ================= */\n$(document).ready(function () {\n    $(\"#btn1\").click(function () {\n        $(\"#title\").text(\"Good Morning Ya!\");\n    });\n\n    $(\"#course\").change(function () {\n        $(\"#message\").text($(this).val());\n    });\n\n    $(\"name\").focus(function () {\n        $(\"#message\").text(\"Input Field!\");\n        $(this).css(\"background-color\", \"lightyellow\");\n    });\n\n    $(\"#btn3\").click(function () {\n        $(\"Messgae\").text(\"You double Clicked\");\n        $(\".Student-info\").hide(1000);\n        $(\"#table\").hide(1000);\n    });\n\n    $(\"#btn2\").dblclick(function () {\n        $(\"#messgae\").text(\"You clicked\");\n        $(this).css(\"color\", \"white\");\n\n        $(\"#table\").show(\"1000\");\n    });\n\n    $(\"tr:even\").css(\"background\", \"lightblue\");\n    $(\"tr:odd\").css(\"background\", \"lightyellow\");\n\n    $(\"#btn4\").click(function () {\n        $(\"tr:even\").css(\"background\", \"red\");\n    });\n\n    $(\"#btn5\").click(function () {\n        $(\"tr:odd\").css(\"background\", \"green\");\n    });\n});"
        },
        {
            id: 203,
            title: "Activity 4",
            date: "Oct 06, 2026",
            tools: "HITML, CSS, JS",
            icon: "monitor",
            img: "factivity4.png",
            code: "<!-- ================= index.html ================= -->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<style>\n    body {\n        text-align: center;\n        margin-top: 50px;\n        font-family: Arial, Helvetica, sans-serif;\n        background-color: rgb(155, 168, 168);\n    }\n\n    div {\n        background-color: antiquewhite;\n        padding: 20px;\n        border-radius: 10px;\n        box-shadow: 6px 6px 0px 0px rgb(46, 10, 10);\n    }\n\n    h1 {\n        text-shadow: 2px 2px rgb(179, 162, 162);\n    }\n\n    button {\n        background-color: rgb(86, 133, 133);\n        color: aliceblue;\n        border: none;\n        border-radius: 25px;\n        padding: 10px;\n        font-size: 10px;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n        transition: all 0.2s ease;\n    }\n\n    button:hover {\n        color: rgb(173, 140, 31);\n        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);\n        transform: translateY(-2px);\n    }\n\n    button:active {\n        box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.3);\n        transform: translateY(2px);\n    }\n\n    #result {\n        background-color: rgb(201, 141, 62);\n        padding: 5px;\n        border-radius: 100px;\n    }\n</style>\n\n<body>\n    <div>\n        <h1>Student Information</h1>\n        <button id=\"loadBtn\"> Load Students</button>\n        <p id=\"result\">No Information Yet</p>\n        <script src=\"script.js\"></script>\n    </div>\n</body>\n\n</html>\n\n/* ================= script.js ================= */\nconst button = document.getElementById(\"loadBtn\");\nconst result = document.getElementById(\"result\");\n\nbutton.addEventListener(\"click\", function(){\n    let request = new XMLHttpRequest();\n\n    request.open(\"GET\", \"Student.txt\", true);\n\n    request.onload = function () {\n        result.innerHTML = request.responseText;\n    };\n\n    request.onreadystatechange = function(){\n        console.log(request.readyState);\n    };\n\n    request.send();\n});\n\n/* ================= Student.txt ================= */\nName: Student 1\n\nCourse: BSIT\n\nYear: 3rd Year"
        }
    ]
};

// Load saved data from localStorage or use defaults
let comlabData = JSON.parse(localStorage.getItem('comlabActivitiesData')) || defaultComlabData;
let currentTerm = 'midterm';

function saveData() {
    localStorage.setItem('comlabActivitiesData', JSON.stringify(comlabData));
    updateTotalStats();
}

function updateTotalStats() {
    const total = comlabData.midterm.length + comlabData.finals.length;
    const statEl = document.getElementById('statTotal');
    if (statEl) statEl.innerText = total;
}

// Theme Switcher
function toggleTheme() {
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        htmlEl.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Switch Term (Midterm / Finals)
function switchTerm(term) {
    currentTerm = term;
    const midtermBtn = document.getElementById('midtermBtn');
    const finalsBtn = document.getElementById('finalsBtn');

    if (term === 'midterm') {
        midtermBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active-tab shadow-md";
        finalsBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-darkcard text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-darkborder hover:border-brand-500 transition-all duration-200";
    } else {
        finalsBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active-tab shadow-md";
        midtermBtn.className = "px-7 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-darkcard text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-darkborder hover:border-brand-500 transition-all duration-200";
    }
    renderActivities();
}

// Render Activities Grid
function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    grid.innerHTML = '';
    const items = comlabData[currentTerm];

    if (items.length === 0) {
        grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="folder-open" class="w-12 h-12 mx-auto mb-3 opacity-50"></i>
        <p>Wala pang activities dito. I-click ang "+ Add Activity" sa itaas para magdagdag!</p>
      </div>
    `;
        lucide.createIcons();
        return;
    }

    items.forEach(act => {
        const card = document.createElement('div');
        card.className = "bg-white dark:bg-darkcard border border-slate-200 dark:border-darkborder rounded-3xl p-6 shadow-sm activity-card flex flex-col justify-between group relative";

        card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-500 flex items-center justify-center">
            <i data-lucide="${act.icon || 'code'}" class="w-6 h-6"></i>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              Completed
            </span>
            <button onclick="deleteActivity(event, '${currentTerm}', ${act.id})" title="Delete Activity" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
        <h4 onclick="openModal('${currentTerm}', ${act.id})" class="font-bold text-slate-900 dark:text-white text-base group-hover:text-brand-500 transition-colors cursor-pointer mb-2">${act.title}</h4>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-darkborder flex items-center justify-between cursor-pointer" onclick="openModal('${currentTerm}', ${act.id})">
        <span class="text-xs text-slate-400 font-medium">${act.date}</span>
        <span class="text-xs font-semibold text-brand-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          View Work <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

// Delete Activity
function deleteActivity(event, term, id) {
    event.stopPropagation();
    if (confirm("Gusto mo bang burahin ang activity na ito?")) {
        comlabData[term] = comlabData[term].filter(a => a.id !== id);
        saveData();
        renderActivities();
    }
}

// Open / Close View Modal
function openModal(term, id) {
    const item = comlabData[term].find(a => a.id === id);
    if (!item) return;

    document.getElementById('modalTermBadge').innerText = term.toUpperCase() + " TERM";
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalDate').innerText = item.date;
    document.getElementById('modalTools').innerText = item.tools;
    document.getElementById('modalImg').src = item.img || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80";
    document.getElementById('modalCodeSnippet').innerText = item.code || "// Walang code na nailagay.";

    switchModalTab('preview');
    document.getElementById('activityModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('activityModal').classList.add('hidden');
}

// Open / Close Add Modal
function openAddModal() {
    document.getElementById('addActivityModal').classList.remove('hidden');
}

function closeAddModal() {
    document.getElementById('addActivityModal').classList.add('hidden');
    document.getElementById('addActivityForm').reset();
}

// Handle Add New Activity Submit with File Upload
function handleAddNewActivity(event) {
    event.preventDefault();

    const term = document.getElementById('newTerm').value;
    const title = document.getElementById('newTitle').value;
    const date = document.getElementById('newDate').value;
    const tools = document.getElementById('newTools').value;
    const code = document.getElementById('newCode').value;
    const fileInput = document.getElementById('newImgFile');

    const file = fileInput.files[0];
    if (!file) return;

    // Convert uploaded image file to Base64 data URL
    const reader = new FileReader();
    reader.onload = function (e) {
        const imageDataUrl = e.target.result;

        const newActivity = {
            id: Date.now(),
            title,
            date,
            tools,
            img: imageDataUrl,
            code,
            icon: "code"
        };

        comlabData[term].push(newActivity);
        saveData();
        closeAddModal();
        switchTerm(term);
    };

    reader.readAsDataURL(file);
}

// Modal Internal Tab Switcher (Preview vs Code)
function switchModalTab(tab) {
    const previewBtn = document.getElementById('tabPreviewBtn');
    const codeBtn = document.getElementById('tabCodeBtn');
    const previewContent = document.getElementById('modalPreviewContent');
    const codeContent = document.getElementById('modalCodeContent');

    if (tab === 'preview') {
        previewBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white transition-all shadow-sm";
        codeBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-darkcard text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all";
        previewContent.classList.remove('hidden');
        codeContent.classList.add('hidden');
    } else {
        codeBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white transition-all shadow-sm";
        previewBtn.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-darkcard text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all";
        codeContent.classList.remove('hidden');
        previewContent.classList.add('hidden');
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    updateTotalStats();
    renderActivities();
});







const canvas = document.getElementById("mouse-trail");
const ctx = canvas.getContext("2d");

let particles = [];
let hue = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 6 + 2,
            life: 1,
            hue: hue + Math.random() * 40 - 20,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3
        });
    }

    hue = (hue + 5) % 360;
});

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.018;
        p.size *= 0.985;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${p.life})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsl(${p.hue}, 100%, 60%)`;
        ctx.fill();
    });

    particles = particles.filter(p => p.life > 0);

    ctx.shadowBlur = 0;
    requestAnimationFrame(animate);
}

animate();
