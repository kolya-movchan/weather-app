[DEMO](https://kolya-movchan.github.io/weather-app/)

Приложение Weather
Реализовать приложение погоды используя апи https://openweathfermap.org/

<!-- Не использовать css фреймворки, ui библиотеки. -->
Функциональность:
Инпут с автокомплитом по городам

<!-- Для запросов использовать fetch или axios -->
Вывод информации о погоде в виде карточки на текущий день
Вывод графика температуры по часам на текущий день используя любой js-plugin по типу https://www.chartjs.org/ без плагина vue https://vue-chartjs.org/
Возможность создать несколько блоков погоды с разными городами, по дефолту всегда есть 1 блок, по кнопке “+” добавляется еще такой же блок с полноценным функционалом. Максимум 5 блоков.
Удаление блоков. Выводить модальное окно с подтверждением.
Сделать вкладку “избранное” , пользователь может добавить, удалить в избранное город. На карточке погоды с городом выделять это состояние иконкой или рамкой.  В самой вкладке отображаются блоки погоды по добавленным городам без возможности выбора города в блоке, только переключение “день/неделя”. Избранные города хранить в localStorage. Ограничить максимум избранных до 5 штук. При превышении кол-ва отображать модальное окно “для добавления удалите город … т.к максимум 5”
Приложение должно быть адаптивно основной контейнер 1200px минимум 360px


* Переключение отображения “день/на 5 дней” соответственно карточка погоды и график по дням, взяв за среднюю температуру из статистики по часам за день. В апи присутствует данная возможность https://openweathermap.org/forecast5

* Отображать по дефолту погоду юзера определив его город по ip используя любой открытый ресурс

* Добавить прелоадеры там где это нужно например пока идет запрос на апи
* Предусмотреть мультиязычность en/uk интерфейса и ответа апи 
*** Переключение отображения погоды “День/Ночь”
** Любая дополнительная функциональность, если будет реализована коротко описать.
Схематичное отображение. Можно верстать полностью свое видение этого приложения
