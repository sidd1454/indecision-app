console.log("App.js is runnning!");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of the computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTextApp();
    }
};

const remove = () => {
    app.options = [];
    renderTextApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderTextApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={remove} className="button">Remove</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" ></input>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderTextApp();
//JSX - JavaScript XML