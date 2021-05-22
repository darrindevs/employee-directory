# Employee Directory

Meet the team! Search the directory or sort by name to find an employee. 


[Deployed App](https://darrindevs.github.io/employee-directory/)

## Technologies Used

⚛️ React - React is an open-source front-end JavaScript library for building user interfaces or UI components.

🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

📦 npm - npm is a package manager for the JavaScript programming language.

👽 Random User Generator - Random User Generator provides an API endpoint to get random users for your app. 

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

😺 GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet 

~~~
{ this.state.results && this.state.results.map(item =>
    item.name.first.toLowerCase().includes(this.state.search) ?
    <tbody key={item.login.uuid}>
        <tr>
            <td ><img src={item.picture.thumbnail} className="avatar" alt="employee"/></td>
            <td >{item.name.first}</td>
            <td ><a href="mailto:{item.email}">{item.email}</a></td>
            <td >{item.location.city}</td>
            <td>{item.dob.age}</td>  
        </tr>
    </tbody>
~~~

## Author

🤓 [darrindevs](https://github.com/darrindevs)

