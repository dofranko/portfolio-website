import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
// ignore: import_of_legacy_library_into_null_safe
import 'package:katex_flutter/katex_flutter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter My Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _latexCode = "";
  final myController = TextEditingController();
  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    myController.dispose();
    super.dispose();
  }

  void _setLaTexText() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _latexCode = myController.text;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('LaTex converter'),
        ),
        body: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints constraints) {
            if (constraints.maxWidth > 600) {
              return _pcVersionContainers();
            } else {
              return _mobileVersionContainers();
            }
          },
        ));
  }

  Widget _pcVersionContainers() {
    return Container(
        color: Colors.white10,
        margin: EdgeInsets.all(10),
        width: double.infinity,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          mainAxisSize: MainAxisSize.max,
          children: [
            Flexible(
              flex: 10,
              child: TextField(
                  minLines: 5,
                  maxLines: 20,
                  style: TextStyle(fontSize: 15),
                  controller: myController,
                  textAlignVertical: TextAlignVertical.center,
                  textAlign: TextAlign.center,
                  decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.blue,
                        ),
                        borderRadius: BorderRadius.circular(1.0),
                      ),
                      hintText: 'Wpisz LaTex kod...',
                      contentPadding: const EdgeInsets.all(10))),
            ),
            FittedBox(
              fit: BoxFit.contain,
              child: TextButton(
                  onPressed: _setLaTexText,
                  child: Container(
                      margin: const EdgeInsets.all(5),
                      child: Text(
                        "Wykonaj",
                        softWrap: false,
                        overflow: TextOverflow.ellipsis,
                      ))),
            ),
            Flexible(
                flex: 10,
                child: Container(
                    decoration: BoxDecoration(
                      border: Border.all(width: 2, color: Colors.blue),
                    ),
                    width: double.infinity,
                    padding: const EdgeInsets.all(10),
                    margin: const EdgeInsets.all(2),
                    child: Row(children: [
                      Expanded(
                          child: SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: KaTeX(
                          laTeXCode: Text(
                            _latexCode,
                            style: Theme.of(context).textTheme.bodyText1,
                          ),
                          delimiter: r'$',
                          displayDelimiter: r'$$',
                        ),
                      ))
                    ])))
          ],
        )

        // This trailing comma makes auto-formatting nicer for build methods.

        );
  }

  Widget _mobileVersionContainers() {
    return Container(
        color: Colors.white10,
        margin: EdgeInsets.all(10),
        width: double.infinity,
        height: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          mainAxisSize: MainAxisSize.max,
          children: [
            Flexible(
              flex: 10,
              child: TextField(
                  minLines: 5,
                  maxLines: 20,
                  style: TextStyle(fontSize: 15),
                  controller: myController,
                  textAlignVertical: TextAlignVertical.center,
                  textAlign: TextAlign.center,
                  decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.blue,
                        ),
                        borderRadius: BorderRadius.circular(1.0),
                      ),
                      hintText: 'Wpisz LaTex kod...',
                      contentPadding: const EdgeInsets.all(10))),
            ),
            Flexible(
              child: TextButton(
                  onPressed: _setLaTexText,
                  child: Text(
                    "Wykonaj",
                    softWrap: false,
                    overflow: TextOverflow.ellipsis,
                  )),
            ),
            Flexible(
                flex: 10,
                child: Container(
                  decoration: BoxDecoration(
                    border: Border.all(width: 2, color: Colors.blue),
                  ),
                  width: double.infinity,
                  height: double.infinity,
                  padding: const EdgeInsets.all(10),
                  margin: const EdgeInsets.all(2),
                  child: KaTeX(
                    laTeXCode: Text(
                      _latexCode,
                      style: Theme.of(context).textTheme.bodyText1,
                    ),
                    delimiter: r'$',
                    displayDelimiter: r'$$',
                  ),
                ))
          ],
        )

        // This trailing comma makes auto-formatting nicer for build methods.

        );
  }
}
