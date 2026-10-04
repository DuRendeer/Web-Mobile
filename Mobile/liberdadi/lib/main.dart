import 'package:flutter/material.dart';
import 'package:liberdadi/pages/catalogo_page.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

const preto = Color(0xFF17161C);
const vermelho = Color(0xFFE02424);
const amarelo = Color(0xFFEBA93A);

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(
    ChangeNotifierProvider(
      create: (_) => ListaProvider(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final tema = flutterNesTheme(primaryColor: vermelho);

    return MaterialApp(
      title: 'JaViu',
      debugShowCheckedModeBanner: false,
      theme: tema.copyWith(
        textTheme: Typography.englishLike2021
            .merge(tema.textTheme)
            .apply(fontSizeFactor: 0.65),
        colorScheme: tema.colorScheme.copyWith(
          primary: vermelho,
          secondary: amarelo,
          inverseSurface: preto,
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: preto,
          foregroundColor: Colors.white,
        ),
        snackBarTheme: const SnackBarThemeData(
          behavior: SnackBarBehavior.floating,
        ),
      ),
      home: const CatalogoPage(),
    );
  }
}
