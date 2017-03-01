var testCreation = {
    createWrapper: function() {
        var wrapper = document.createElement('div');
        wrapper.className = "wrapper";
        document.body.appendChild(wrapper);
    },

    createHeader: function() {
        var wrapper = document.querySelector('.wrapper');
        var header = document.createElement('h1');
        var headerText = document.createTextNode("Тест по программированию");
        header.className = "header";
        wrapper.appendChild(header);
        header.appendChild(headerText);
    },

    createContainer: function() {
        var wrapper = document.querySelector('.wrapper');
        var container = document.createElement('div');
        container.className = "test";
        wrapper.appendChild(container);
    },

    createButton: function() {
        var wrapper = document.querySelector('.wrapper');
        var btn = document.createElement('a');
        var btnText = document.createTextNode("Проверить мои результаты");
        btn.className = "btn";
        wrapper.appendChild(btn);
        btn.appendChild(btnText);
    },

    createTree: function() {
        var container = document.querySelector('.test');
        var obj = {
            "Вопрос №1": ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
            "Вопрос №2": ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
            "Вопрос №3": ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
        };
        var ol = document.createElement('ol');
        ol.className = "test__list";
        container.appendChild(ol);

        for (var key in obj) {
            var li = document.createElement('li');
            li.className = "test__questions";
            ol.appendChild(li);

            var question = document.createTextNode(key);
            li.appendChild(question);

            var ul = document.createElement('ul');
            ul.className = "test__block";
            li.appendChild(ul);

            var prop = obj[key];

            for (var i = 0; i < prop.length; i++) {
                var li2 = document.createElement('li');
                li2.className = "test__answers";
                ul.appendChild(li2);

                var label = document.createElement('label');
                li2.appendChild(label);

                var inp = document.createElement('input');
                inp.className = "checkbox";
                inp.type = "checkbox";
                label.appendChild(inp);

                var textLabel = document.createTextNode(prop[i]);
                label.appendChild(textLabel);
            }
        }
    },

    createDocument: function() {
        this.createWrapper();
        this.createHeader();
        this.createContainer();
        this.createTree();
        this.createButton();

    }
};

testCreation.createDocument();