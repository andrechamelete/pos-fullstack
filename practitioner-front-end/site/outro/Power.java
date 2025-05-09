class Power {

    public static int power(int x, int e) {
        int result = 1;
        for (int i = 0; i < e; i++) {
            result *= x;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(power(2, 4));
    }
}