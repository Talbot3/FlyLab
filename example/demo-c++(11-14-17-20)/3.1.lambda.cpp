//值捕获

void lambda_value_capture() {
  int value = 1;
  auto copy_value = [value] {
    return value;
  };

  value = 100;
  auto stored_value = copy_value();
  std::cout << "stored_value = " << stored_value << std::endl;
}


void lambda_reference_capture() {
  int value = 1;
  auto copy_value = [&value] {
    return value;
  };

  value = 100;
  auto stored_value = copy_value();
  std::cout << "stored_value = " << stored_value << std::endl;
}