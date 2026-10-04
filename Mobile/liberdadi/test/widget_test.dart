import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:liberdadi/main.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:liberdadi/widgets/botao_quero_ver.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

void main() {
  testWidgets('so marca como assistido acertando a pergunta', (tester) async {
    await tester.pumpWidget(
      ChangeNotifierProvider(
        create: (_) => ListaProvider(),
        child: const MyApp(),
      ),
    );

    expect(find.text('1'), findsNothing);
    await tester.tap(find.byType(BotaoQueroVer).first);
    await tester.pump();
    expect(find.text('1'), findsOneWidget);

    await tester.tap(find.descendant(of: find.byType(AppBar), matching: find.byType(NesIconButton)));
    await tester.pumpAndSettle();
    expect(find.text('De Volta para o Futuro'), findsOneWidget);

    await tester.tap(find.byType(NesCheckBox));
    await tester.pumpAndSettle();
    await tester.tap(find.text('66 milhas por hora'));
    await tester.pumpAndSettle();
    expect(find.text('Já viu! E aí, gosto?'), findsNothing);

    await tester.tap(find.byType(NesCheckBox));
    await tester.pumpAndSettle();
    await tester.tap(find.text('88 milhas por hora'));
    await tester.pumpAndSettle();
    expect(find.text('Zerou a lista! Pia'), findsOneWidget);
    expect(find.text('Já viu! E aí, gosto?'), findsOneWidget);

    await tester.pump(const Duration(seconds: 5));
    await tester.pumpAndSettle();
  });
}
