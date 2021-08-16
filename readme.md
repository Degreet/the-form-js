# Подготовка HTML

Элементу form необходимо задать название.
Добавляем атрибут the-form и указываем
название формы, например "first":

```html
<form the-form="first"></form>
```

В форме создаем нужные поля
(input, select, textarea ...), самое
главное, чтобы у полей тоже было имя. Имя полю
можно задать добавив атрибут name:

```html
<form the-form="first">
  <input name="login" type="text">
  <input name="pwd" type="password">
  
  <select name="gender">
    <option value="male">Мужской</option>
    <option value="female">Женский</option>
  </select>
    
  <button>Войти</button>
</form>
```

# Получаем данные в JavaScript

После подключения библиотеки, появляется
переменная TheForm в window. В ней
хранится поле "forms", в котором мы можем
найти созданную форму по ее названию:

```javascript
const form = TheForm.forms.first
```

В полученном объекте хранится поле "el"
(сам элемент), а также все созданные поля,
которые можно найти по имени:

```javascript
const el = form.el // получили элемент формы
const login = form.login // получили значение поля "login"
```

# Перезагрузка форм

Если Вы создали новую форму через JavaScript,
то чтобы ее обработать, Вам необходимо
перезагрузить модуль. Для этого в объекте
TheForm вызовите метод reloadForms:

```javascript
TheForm.reloadForms()
```

# Примеры

Пример находиться в папке "after".
Также Вы можете посмотреть, как этот
пример выглядел бы без этого модуля в
папке "before"