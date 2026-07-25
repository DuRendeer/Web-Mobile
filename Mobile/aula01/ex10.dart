//nem lembrava oq é num primo mas né 

void main() {
  for (int n = 2; n <= 100; n++) {
    bool ehPrimo = true;

    for (int d = 2; d * d <= n; d++) {
      if (n % d == 0) {
        ehPrimo = false;
        break;}
    }
    if (ehPrimo) print(n);
    }
}