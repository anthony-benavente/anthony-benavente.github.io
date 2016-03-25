angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'portfolio/portfolio.tpl.html', 'resume/resume.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"container content\">\n" +
    "    <h1>About Me</h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div id=\"cnmi\" class=\"patriotic-image full-screen\">\n" +
    "	<img src=\"assets/cnmi.gif\">\n" +
    "	 <div id=\"keepGoing\" class=\"animated fadeIn\">\n" +
    "		<ul id=\"social-list\">\n" +
    "			<li><a class=\"excited\" href=\"http://github.com/anthony-benavente\"><i class=\"fa fa-github\"></i></a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://bitbucket.org/ambenavente1/\"><i class=\"fa fa-bitbucket\"></i></a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://twitter.com/benaventay\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://www.instagram.com/abenavente406/\"><i class=\"fa fa-instagram\"></i></a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://www.facebook.com/anthony.benavente.754\"><i class=\"fa fa-facebook-square\"></i></a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://www.linkedin.com/in/anthony-benavente-a5101196\"><i class=\"fa fa-linkedin-square\"></i></a></li>\n" +
    "        </ul>\n" +
    "        <!--<h1 class=\"center animated shake\">What is this image? (Click)<br><i class=\"fa fa-angle-double-down\"></i></h1>-->\n" +
    "	</div> \n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-cnmi\" class=\"padded row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<h1>What is this image?</h1>\n" +
    "		<p class=\"excited\">\n" +
    "			I was born on an island called <span id=\"saipan\">Saipan</span>, the capital of the CNMI. The image shown above\n" +
    "		 	is the flag of this territory of the United States. The map shows where exactly Saipan is in relation to\n" +
    "			the rest of the world.\n" +
    "		</p>\n" +
    "		<blockquote>\n" +
    "			Want to learn more? See the Wikipedia page <a href=\"https://en.wikipedia.org/wiki/Saipan\">here</a>.\n" +
    "		</blockquote>\n" +
    "	</div>\n" +
    "	<div id=\"saipan-map\" class=\"col-md-6\">\n" +
    "		<iframe width=\"400\" height=\"200\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=Saipan&key=AIzaSyBENlmTWWzupsKs2C18rrgdU7mGwjFC1N4\" allowfullscreen></iframe>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"nc\" class=\"full-screen\">\n" +
    "	<div class=\"overlay\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-8\">\n" +
    "			<h1>I am a North Carolinian.</h1>\n" +
    "			<p class=\"excited\">\n" +
    "				I may not have been born here, but I have lived in the Raleigh-Durham area in North Carolina since I was ten years old.\n" +
    "				I attend school in the mountains of NC at Western Carolina University.\n" +
    "			</p>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-4 center\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container row full-screen padded\">\n" +
    "	<div class=\"row col-md-8\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h1>Programming Enthusiast.</h1>\n" +
    "			<p class=\"excited\">\n" +
    "				I've been programming since I was 15 years old and have made many\n" +
    "				projects in my programming history.\n" +
    "			</p>\n" +
    "			<blockquote>\n" +
    "				See some of my personal projects <a href=\"#portfolio\">here</a>.\n" +
    "			</blockquote>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h1>Hard Worker.</h1>\n" +
    "			<p class=\"excited\">\n" +
    "				I've been working at AdmissionPros LLC. for 3 years.\n" +
    "			</p>\n" +
    "			<blockquote>\n" +
    "				See what I've done while working <a href=\"#portfolio\">here</a>.\n" +
    "			</blockquote>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h1>Student.</h1>\n" +
    "			<p class=\"excited\">\n" +
    "				As a Junior at Western Carolina University, I've made many projects\n" +
    "				including Android Apps, a basic (not <samp>BASIC</samp>) interpretter,\n" +
    "				as well as a data-persistent juke box programmed with Java.\n" +
    "			</p>\n" +
    "			<blockquote>\n" +
    "				See some of my school work <a href=\"#portfolio\">here</a>.\n" +
    "			</blockquote>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"social-media-col\" class=\"col-md-4\">\n" +
    "		<ul id=\"social-media-list\">\n" +
    "			<li><a class=\"excited\" href=\"http://github.com/anthony-benavente\"><i class=\"fa fa-github\"></i> anthony-benavente</a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://bitbucket.org/ambenavente1/\"><i class=\"fa fa-bitbucket\"></i> ambenavente1</a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://twitter.com/benaventay\"><i class=\"fa fa-twitter\"></i> @benaventay</a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://www.instagram.com/abenavente406/\"><i class=\"fa fa-instagram\"></i>@abenavente406</a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://www.facebook.com/anthony.benavente.754\"><i class=\"fa fa-facebook-square\"></i> Facebook</a></li>\n" +
    "			<li><a class=\"excited\" href=\"https://www.linkedin.com/in/anthony-benavente-a5101196\"><i class=\"fa fa-linkedin-square\"></i> LinkedIn</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("portfolio/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/portfolio.tpl.html",
    "<div class=\"container content\">\n" +
    "    <h2>School Projects</h2>\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            <h3>Recursive Descent Parser</h3>\n" +
    "            <p>\n" +
    "                The goal of the project was to make a full interpreter build off of the grammar described in the section below. \n" +
    "                The interpreter should be able to parse and evaluate mathematical expressions.\n" +
    "            </p>\n" +
    "            <h4>Backus Naur Form of Grammar</h4>\n" +
    "            <code>\n" +
    "                &lt;bexpr&gt; ::= &lt;expr&gt; ;<br>\n" +
    "                &lt;expr&gt; ::=  &lt;term&gt; &lt;ttail&gt;<br>\n" +
    "                &lt;ttail&gt; ::=  &lt;add_sub_tok&gt; &lt;term&gt; &lt;ttail&gt; | e<br>\n" +
    "                &lt;term&gt; ::=  &lt;stmt&gt; &lt;stail&gt;<br>\n" +
    "                &lt;stail&gt; ::=  &lt;mult_div_tok&gt; &lt;stmt&gt; &lt;stail&gt; | e<br>\n" +
    "                &lt;stmt&gt; ::=  &lt;factor&gt; &lt;ftail&gt;<br>\n" +
    "                &lt;ftail&gt; ::=  &lt;compare_tok&gt; &lt;factor&gt; &lt;ftail&gt; | e<br>\n" +
    "                &lt;factor&gt; ::=  &lt;expp&gt; ^ &lt;factor&gt; | &lt;expp&gt;<br>\n" +
    "                &lt;expp&gt; ::=  ( &lt;expr&gt; ) | &lt;num&gt;<br>\n" +
    "                &lt;add_sub_tok&gt; ::=  + | -<br>\n" +
    "                &lt;mul_div_tok&gt; ::=  * | /\n" +
    "                &lt;compare_tok&gt; ::=  &lt; | &gt; | &= | &gt;= | ! = | ==<br>\n" +
    "                &lt;num&gt; ::=  {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}+<br>\n" +
    "            </code>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <h3>Domain Name Resolver</h3>\n" +
    "            <p>\n" +
    "                This project was written in Java and was made in order to learn more about networking as well as the DNS protocol\n" +
    "                as specified in RFC 1035. The program was command line based but also came with a GUI created in Java Swing. Recently,\n" +
    "                I ported this over to C which you can <a href=\"https://github.com/anthony-m-benavente/dnsresolve\">find on my GitHub</a>.\n" +
    "            </p>\n" +
    "            <div class=\"albumize\" title=\"nsresolve\">\n" +
    "                <a href=\"assets/nsresolve-cmd.png\" title=\"nsresolve command line view\">\n" +
    "                    <img src=\"assets/nsresolve-cmd.png\" alt=\"nsresolve command line view\">\n" +
    "                </a>\n" +
    "                <a href=\"assets/nsresolve-gui.png\" title=\"nsresolve gui view\">\n" +
    "                    <img src=\"assets/nsresolve-gui.png\" alt=\"nsresolve gui view\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <h3>Networked Game of S.O.S.</h3>\n" +
    "            <p>\n" +
    "                If you aren't familiar with the game of S.O.S., <a href=\"\">here is a link to the rules</a>. This project was a networked,\n" +
    "                command line version of the game that supported a server where an N amount of players can play.  This project was also\n" +
    "                written in Java.\n" +
    "            </p>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <h3>Juke Meister</h3>\n" +
    "            <p>\n" +
    "                Juke Meister was a year long project for my 2nd year software engineering class. We worked in a team of 4 and went through the\n" +
    "                entire process following the development lifecycle.  We had 4 milestones in all, where the 4th and final one was implementation.\n" +
    "                Juke Meister is a touch-compatible juke box software running in Java that uses Java Swing as the GUI. It has two views, the user\n" +
    "                and the administrator view, where, with a password, administrators can log in to manage the machine. User's had to pay money to \n" +
    "                play music, but to emulate that, we attached the coin insert function to keyboard input.\n" +
    "            </p>\n" +
    "            <div class=\"albumize\" title=\"jukemeister\">\n" +
    "                <a href=\"assets/jukemeister-userview1.png\" title=\"Jukemeister user view\">\n" +
    "                    <img src=\"assets/jukemeister-userview1.png\" alt=\"Jukemeister user view\">\n" +
    "                </a>\n" +
    "                <a href=\"assets/jukemeister-userview2.png\" title=\"Jukemeister user view\">\n" +
    "                    <img src=\"assets/jukemeister-userview2.png\" alt=\"Jukemeister user view\">\n" +
    "                </a>\n" +
    "                <a href=\"assets/jukemeister-adminview.png\" title=\"Jukemeister admin view\">\n" +
    "                    <img src=\"assets/jukemeister-adminview.png\" alt=\"Jukemeister admin view\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <h3>Route Recorder</h3>\n" +
    "            <p>\n" +
    "                Route Recorder is an Android application that tracks where the user has traveled while the app is running and traces the \n" +
    "                user's route with a line. Route's can be saved and loaded as well as tracking distance travelled. This app is requires\n" +
    "                GPS or a cell signal for location tracking.\n" +
    "            </p>\n" +
    "            <div class=\"albumize\" title=\"route-recorder\">\n" +
    "                <a href=\"assets/route-recorder.png\" title=\"Route Recorder splash screen\">\n" +
    "                    <img src=\"assets/route-recorder.png\" alt=\"Route Recorder splash screen\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <h3>Project Index</h3>\n" +
    "            <p>If you'd like to know more about any of these projects, let me know!</p>\n" +
    "            <ul>\n" +
    "                <li>Fall 2013 (Freshman)\n" +
    "                    <ul>\n" +
    "                        <li>Introduction to Problem Solving I (CS 150)\n" +
    "                            <ul>\n" +
    "                                <li>Project Introducing OOP in Java (Officially named \"Vending Machine\")</li>\n" +
    "                                <li>Project Introducing OOP in Java #2 (Officially named \"Snowfall\")</li>\n" +
    "                                <li>Expanding on Arrays (Officially named \"Olympics\")</li>\n" +
    "                                <li>Multiplayer Checkers in Java Swing (Honors Project)</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Spring 2014 (Freshman)\n" +
    "                    <ul>\n" +
    "                        <li>Introduction to Problem Solving II (CS 151)\n" +
    "                            <ul>\n" +
    "                                <li>A Review on OOP - Monkeys in a Maze</li>\n" +
    "                                <li>Double Array Sequence</li>\n" +
    "                                <li>Double Linked Sequence</li>\n" +
    "                                <li>Word Ladder</li>\n" +
    "                                <li>Arcade Machine (Honors Project) -- <a href=\"\">You can find the write-up here.</a></li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Fall 2014 (Sophomore)\n" +
    "                    <ul>\n" +
    "                        <li>Data Structures and Algorithms (CS 351)\n" +
    "                            <ul>\n" +
    "                                <li>Database Implemented with Linked Lists</li>\n" +
    "                                <li>Graphs and Transitive Closure</li>\n" +
    "                                <li>Heaps and Binary Trees</li>\n" +
    "                                <li>Binary Tree Visualizer in Java Swing</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Software Development (CS 363)\n" +
    "                            <ul>\n" +
    "                                <li>Hashing in Databases</li>\n" +
    "                                <li>HTML Formatted Printer using Tree Traversals</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Introduction to Scientific Computing (MATH 340)\n" +
    "                            <ul>\n" +
    "                                <li>Exploring Noise - Creating Fractal-Like Structures with Psuedo-Random Noise</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Spring 2015 (Sophomore)\n" +
    "                    <ul>\n" +
    "                        <li>Android Applications Development (CS 467)\n" +
    "                            <ul>\n" +
    "                                <li>Catamount Letters</li>\n" +
    "                                <li>Five Card Draw</li>\n" +
    "                                <li>Paint Meister</li>\n" +
    "                                <li>Route Recorder</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Software Engineering (CS 263)\n" +
    "                            <ul>\n" +
    "                                <li>Juke Meister</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Organization of Programming Language (Language Theory) (CS 352)\n" +
    "                            <ul>\n" +
    "                                <li>Sorting File Contents In C - An Introduction to C</li>\n" +
    "                                <li>Tokenizer in C</li>\n" +
    "                                <li>Recursive Descent Parser</li>\n" +
    "                                <li>File Manipulation in Node.JS (Port of First Project)</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Fall 2015 (Junior)\n" +
    "                    <ul>\n" +
    "                        <li>Networking (CS 465)\n" +
    "                            <ul>\n" +
    "                                <li>Time and Daytime Protocols Implementation in Java</li>\n" +
    "                                <li>Chargen++ Server + Client in Java using both TCP and UDP</li>\n" +
    "                                <li>Networked Game of S.O.S. in Java</li>\n" +
    "                                <li>DNS Resolver (Honors Project)</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Computer Graphics (CS 361)\n" +
    "                            <ul>\n" +
    "                                <li>2-D Stained Glass Window with Three.JS and WebGL</li>\n" +
    "                                <li>Playable Game with Unity</li>\n" +
    "                                <li>3-D Animated Turnstile with Three.JS and WebGL</li>\n" +
    "                                <li>World-gen (<a href=\"http://agora.cs.wcu.edu/~ambenavente1/worldgen/worldgen.html\">Link</a>)</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Spring 2016 (Junior)\n" +
    "                    <ul>\n" +
    "                        <li>Operating Systems (CS 370)\n" +
    "                            <ul>\n" +
    "                                <li>Shell from Scratch in C</li>\n" +
    "                                <li>Racing Sorts - Multi-threaded program to compare different sorting algorithms (Honors Project)</li>\n" +
    "                                <li>More to come...</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Databases (CS 465)\n" +
    "                            <ul>\n" +
    "                                <li>Relational Algebra Assignment (on paper??)</li>\n" +
    "                                <li>Using PLSQL</li>\n" +
    "                                <li>Exploring Subqueries and Optimization in PLSQL</li>\n" +
    "                                <li>More to come...</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                        <li>Computer Organization / MIPS (CS 350)\n" +
    "                            <ul>\n" +
    "                                <li>Introduction to MIPS - First Assembly Program</li>   \n" +
    "                                <li>Spaced Insertion Sort in Assembly</li>\n" +
    "                                <li>Intel 8080 Emulator (<a href=\"\">Link</a>) - Honors Project</li>\n" +
    "                                <li>More to come...</li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul> \n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("resume/resume.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("resume/resume.tpl.html",
    "<div class=\"container content\">\n" +
    "    <iframe src=\"https://drive.google.com/file/d/0B6GDYlMCIMkkdld2UFc2NDR1NkU/preview\" style=\"margin: 0 auto; width:100%; height:700px;\" frameborder=\"1\"></iframe>\n" +
    "</div>\n" +
    "");
}]);
