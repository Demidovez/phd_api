import express from "express";
import cors from "cors";
import axios from "axios";
import fs from "fs";
import { readFile } from "fs/promises";

const TAGS_INFO = JSON.parse(
  await readFile(new URL("./tags_info.json", import.meta.url))
);
const TAGS_DEMO = JSON.parse(
  await readFile(new URL("./demo.json", import.meta.url))
);

const app = express();
const port = process.env.PORT || 6001;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://172.27.70.9"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/start", (req, res) => {
  res.json({ Response: "started" });
});

app.get("/signalr", (req, res) => {
  res.json({
    C: "d-BBABD138-B,0|Q0,26|D,0|Q1,1",
    M: [
      {
        H: "ConnectionHub",
        M: "nMCn-2bJx-rD9z-tFKw-S7yg-dataAvailableToRequest",
        A: [],
      },
    ],
  });
});

app.get("/signalr/start", (req, res) => {
  res.json({ Response: "started" });
});

app.post("/signalr/connect", (req, res) => {
  res.json({ C: "d-9FCAE3E6-B,0|GS,0|G,0|GT,1", S: 1, M: [] });
});

app.get("/signalr/connect", (req, res) => {
  res.json({});
  // res.json({ C: "d-9FCAE3E6-B,0|GS,0|G,0|GT,1", S: 1, M: [] });
});

app.post("/signalr", (req, res) => {
  res.json({});
});

app.post("/signalr/poll", (req, res) => {
  res.json({});
});

app.post("/signalr/send", (req, res) => {
  res.json({});
});

app.post("/signalr/abort", (req, res) => {
  res.json({});
});

app.post("/createWindowAndSubscribeToGraphic", (req, res) => {
  res.json({});
});

app.get("/createWindowAndSubscribeToGraphic", (req, res) => {
  res.json({});
});

app.get("/connect", (req, res) => {
  res.json({
    C: "d-BBABD138-B,0|Q0,26|D,0|Q1,1",
    M: [
      {
        H: "ConnectionHub",
        M: "nMCn-2bJx-rD9z-tFKw-S7yg-dataAvailableToRequest",
        A: [],
      },
    ],
  });
});

app.get("/negotiate", (req, res) => {
  res.json({
    Url: "/signalr",
    ProtocolVersion: "1.5",
    TryWebSockets: false,
  });
});

app.get("/strings", (req, res) => {
  res.json({
    culture: "ru-RU",
    username: "UISVR\\operuser",
    Application_Error_Binding: "Ошибка приложения при привязке данных",
    Communication_Error_Disconnected: "Подключение потеряно",
    Communication_Error_Heartbeat:
      "Ошибка связи. Соединение с сервером потеряно.",
    Communication_Error_Need_Refresh:
      "Ошибка связи. Пожалуйста, обновите страницу.",
    Connection_Error_DataConnection:
      "Ошибка при установлении подключения к данным",
    Connection_Error_InitPage: "Ошибка инициализации страницы",
    recoverAttempt: "Соединение с хостом потеряно. Переподключение...",
    recoverSuccess: "Успешно подключено",
    multiScale: "Множественная шкала",
    singleScale: "Единая шкала",
    stackedScale: "Составная шкала",
    autoScale: "Авто-диапазон",
    tagRange: "Диапазон тега",
    customScale: "Пользовательский",
    auto: "Авто",
    "1 second": "1 секунда",
    "5 seconds": "5 секунд",
    "10 seconds": "10 секунд",
    "30 seconds": "30 секунд",
    "1 minute": "1 минута",
    "2 minutes": "2 минуты",
    "5 minutes": "5 минут",
    "10 minutes": "10 минут",
    "30 minutes": "30 минут",
    "1 hour": "1 час",
    "2 hours": "2 часа",
    "4 hours": "4 часа",
    "8 hours": "8 часов",
    "1 day": "1 день",
    "7 days": "7 дней",
    "30 days": "30 дней",
    item: "Элемент",
    alias: "Псевдоним",
    description: "Описание",
    dataSource: "Источник данных",
    units: "Ед. изм.",
    aggregate: "Агрегирование",
    interval: "Интервал",
    yAxis: "Ось-Y",
    xAxis: "Шкала-X",
    hairlines: "Метки",
    hairlineFlags: "Флаги меток",
    resetZoom: "Отмена масштабирования (Esc)",
    interpolated: "Интерполированный",
    stepped: "Ступенчатый",
    none: "Нет",
    onePixel: "1пикс.",
    twoPixel: "2пикс.",
    threePixel: "3пикс.",
    fourPixel: "4пикс.",
    fivePixel: "5пикс.",
    sixPixel: "6пикс.",
    addHairline: "Добавить метку",
    style: "Стиль",
    yAxisScale: "Шкала оси-Y",
    details: "Детали",
    editStyle: "Изменить стиль",
    editDetails: "Редактирование",
    min: "Мин",
    max: "Макс.",
    deleteTrace: "Удаление",
    delete: "Удалить",
    traces: "кривые",
    trendSettings: "Настройки тренда",
    legendColumns: "Столбцы легенды",
    activeCursor: "Активный курсор",
    legend: "Легенда",
    toolbar: "Панель инструментов",
    deleteHairlineCaption: "Удалить метку",
    makeHairlinePrimaryCaption: "Сделать эту метку приоритетной",
    hairlinePrimaryCaption: "Приоритетная метка",
    legendAddItem: "Добавить элемент...",
    minimizeLegendCaption: "Свернуть легенду",
    restoreLegendCaption: "Развернуть легенду",
    NaN: "NaN",
    unknownValue: "?????",
    notApplicable: "Недоступно",
    addAnnotation: "Комментарий",
    minimizeAnnotationCaption: "Свернуть комментарий",
    deleteAnnotationCaption: "Удалить комментарий",
    defaultAnnotationTooltip: "Нажмите для комментария",
    annotationTitlePlaceholder: "Добавить заголовок...",
    annotationTextPlaceholder: "Добавить текст...",
    deleteDataSetCaption: "Удалить этот набор данных",
    timeHeading: "Время",
    format: "Формат",
    editFormat: "Изменить формат",
    precision: "Точность",
    deleteDataSet: "Удалить столбец",
    moreDetails: "Показать подробности",
    lessDetails: "Меньше деталей",
    createdBy: "Создал:",
    modifiedBy: "Изменил:",
    chooseColor: "Выберите цвет",
    events: "Все события",
    noEventDescription: "Нет описания события",
    noEventCategory: "Нет категории события",
    closeEventDetails: "Закрыть детали события",
    pinEventDetails: "Закрепить детали событий",
    unpinEventDetails: "Открепить детали события",
    noEvents: "Нет событий для показа",
    userPreferences: "Пользовательские настройки",
    saveTraceStyling: "Сохранить как настройки",
    clearTraceStyling: "Очистить настройки",
    filledDown: "Вниз",
    filledUp: "Вверх",
    stepHeading: "Шаг",
    fillHeading: "Заливка",
    quickTrend: "Быстрый тренд",
    colorPaletteDefault: "По умолчанию",
    colorPaletteClassic: "Классический",
    colorPaletteCustom: "Пользовательский",
    applyColor: "Применить цвет",
    Gauge_SanitizationError_RangeCouldNotParse:
      "Не удалось проанализировать минимальное или максимальное значение диапазона",
    Gauge_SanitizationError_RangeMinGreaterThanOrEqualToMax:
      "Минимальное значение диапазона больше или равно максимальному значению диапазона",
    Gauge_SanitizationError_ThresholdOutsideRange:
      "Одно или несколько пороговых значений вне диапазона",
    Gauge_SanitizationError_ThresholdValueMismatch:
      "Одно или несколько пороговых значений неверно настроены",
    theme: "Тема",
    themeDefault: "По умолчанию",
    themeDark: "Тёмный",
    copyItem: "Копировать элемент",
    showURL: "Показать URL",
    hideURL: "Скрыть URL",
    resourceNotFound: "!Ресурс не найден",
    viewActualSize: "Просмотр актуального размера",
    zoomToFit: "По размеру",
    navigatePortal: "Переход по ссылке",
    navigateTile: "Открыть ссылку на плитке",
    showSeconds: "true",
    showShortYear: "false",
    showNumericMonth: "true",
  });
});

app.post("/paranoid", function (req, res) {
  res.json({
    ls: [
      { p: "Default", l: 4000 },
      { p: "Binding", l: 4000 },
      { p: "Data", l: 4000 },
      { p: "Trend", l: 4000 },
      { p: "Table", l: 4000 },
      { p: "Performance", l: 4000 },
      { p: "Communication", l: 4000 },
      { p: "WorkspacePlugin", l: 4000 },
      { p: "Trace.IlmToVis", l: 5000 },
      { p: "Trace.VisToIlm", l: 5000 },
      { p: "Visualization", l: 4000 },
    ],
  });
});

app.get("/tags_info", (req, res) => {
  axios.get(process.env.API_SERVER + "/tags_info").then(({ data }) => {
    const tagsInfo = data.reduce(
      (acc, item) => ({ ...acc, [item.tagname]: item }),
      {}
    );

    fs.writeFile("tags_info.json", JSON.stringify(tagsInfo), () => {
      console.log("done");
    });

    res.json({});
  });
});

app.post("/tags_raw_now_bot", async (req, res) => {
  const tagsRequest = req.body; // [3, "2alic0021.daca.pv", "{0}"]

  console.log(new Date().toLocaleString());

  //   console.log(tagsRequest.filter(([a, b, c, d, e]) => a === "312"));

  let result = {};

  //   console.log(tagsRequest.find(([a, b, c, d, e]) => a === "15")[3]);

  const tagsPHD = await axios
    .post(process.env.API_SERVER + "/tags_raw_now", {
      tags: [...new Set(tagsRequest.map(([_, tag]) => tag))],
    })
    .then(({ data }) => {
      return (data || []).reduce(
        (acc, item) => ({ ...acc, [item.name]: item }),
        {}
      );
    })
    .catch((err) => {
      console.log(err.message);

      return {};
    });

  tagsRequest.forEach((tagRequest) => {
    const objectId = tagRequest[0];
    const tagname = tagRequest[1];
    const displayVal = tagRequest[2];
    const dynamicVisualisation = tagRequest[3];

    if (tagsPHD[tagname]) {
      const data = tagsPHD[tagname].data[0];

      let value = 0;

      // console.log(objectId, tagname, displayVal);

      if (displayVal === "{6}") {
        value = (TAGS_INFO[tagname] || { unit: "" }).unit;
      } else {
        value = data
          ? isNaN(data.val.replace(",", "."))
            ? data.val
            : parseFloat(data.val.replace(",", "."))
          : NaN;
      }

      const date = data ? data.date : new Date().toISOString();

      let dynamic = {};

      if (dynamicVisualisation) {
        //   dynamic =  [dynamicVisualisation ? "dv" : "v"]: {
        //     v: value,
        //   },

        //   if (objectId == 15) {
        //     const data1 = tagsRequest.find(([a, b, c, d, e]) => a === "15")[3];
        //     console.log(data1, value);
        //   }

        const findedIndex = dynamicVisualisation.findIndex((dyn, index) => {
          if (dyn.ComparisonType == 0) {
            return value <= dyn.FixedDoubleBreakpointValue;
          } else if (dyn.ComparisonType == 1) {
            return (
              value > dynamicVisualisation[index - 1].FixedDoubleBreakpointValue
            );
          } else if (dyn.ComparisonType == 2) {
            return dyn.FixedStringBreakpointValue == value;
          }
        });

        if (findedIndex >= 0) {
          dynamic = {
            dv: {
              v: findedIndex,
            },
          };
        }
      } else {
        dynamic = {
          v: {
            v: value,
          },
        };
      }

      if (data) {
        result[objectId] = {
          ...dynamic,
          rt: { v: date },
          co: true,
        };
      }
    }
  });

  //   console.log(result["329"]);

  res.json({
    u: result,
  });

  //   const test_result = {
  //     u: {
  //       2: {
  //         s: { v: new Date().toISOString() },
  //         c: { v: new Date().toISOString() },
  //         e: { v: new Date().toISOString() },
  //       },
  //       ...Object.fromEntries(
  //         Object.entries(TAGS_DEMO.u).map(([id, val]) => {
  //           if (id === "51") {
  //             console.log(val);
  //           }

  //           if (val.rt) {
  //             return [id, { ...val, rt: { v: new Date().toISOString() } }];
  //           } else {
  //             return [id, val];
  //           }
  //         })
  //       ),
  //     },
  //   };

  //   res.json(test_result);
});

app.listen(port, () => console.log(`Сервер запущен... на порту ${port}`));
