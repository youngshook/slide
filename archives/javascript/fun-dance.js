var a = "\r\n", max = 0;
function tlist() {
  max = tlist.arguments.length;
  for (i = 0; i < max; i++) {
    this[i] = tlist.arguments[i];
  }
}
var tl = new tlist(
    "   o" + a +
    "  /|\\" + a +
    " */ \\*        跳舞" + a,

    "   o_" + a +
    "  \<| *" + a +
    "  *\>\\         跳舞" + a,

    "  _o/*" + a +
    " * |" + a +
    "  / \\         跳舞" + a,

    " *\o_" + a +
    "  /  *" + a +
    " \<\\           跳舞" + a,

    "  _o/*" + a +
    " * |" + a +
    "  / \\         跳舞" + a,

    " *\\c/*" + a +
    "   )" + a +
    "  / \>         跳舞" + a,

    "     *" + a +
    "  \\__/c" + a +
    "   \> \\*       跳舞" + a,

    "   __/" + a +
    "    (o_*" + a +
    "     \\*       跳舞" + a,

    "      \\ /" + a +
    "       |" + a +
    "     */o\\*    跳舞" + a,

    "       \\_" + a +
    "       (" + a +
    "     */o\\*    跳舞" + a,

    "        \<_" + a +
    "      __(" + a +
    "     * o|*    跳舞" + a,

    "         /_" + a +
    "      __(" + a +
    "     * o|*   跳舞" + a,

    "         ___" + a +
    "      *\/ \>" + a +
    "       o|*    跳舞" + a,

    "        *" + a +
    "       o|_/" + a +
    "      */  \\   跳舞" + a,

    "        *" + a +
    "      _o|_" + a +
    "     *   \>\\   跳舞" + a,

    "       _o/*" + a +
    "      * |" + a +
    "       / \\    跳舞" + a,

    "      *\\o/*" + a +
    "        |" + a +
    "       / \\    跳舞" + a,

    "      c/*" + a +
    "      \<\\" + a +
    "      */\\     跳舞" + a,

    "      c__" + a +
    "      \<\ *" + a +
    "      */\\     跳舞" + a,

    "      c__" + a +
    "      /\ *" + a +
    "     * /\>     跳舞" + a,

    "      c/*" + a +
    "     /(__" + a +
    "    * /       跳舞" + a,

    "    __o/*" + a +
    "    * (__" + a +
    "      \<       跳舞" + a,

    "      __o_" + a +
    "     * /  *" + a +
    "      \<\\      跳舞" + a,

    "     *_o_" + a +
    "       | *" + a +
    "      \< \\     跳舞" + a,

    "     *_c_*" + a +
    "       |" + a +
    "       \>\\     跳舞" + a,

    "     *_c_*" + a +
    "       |__" + a +
    "       \>      跳舞" + a,

    "     *_c_*" + a +
    "     __|__" + a +
    "              跳舞" + a,

    " " + a +
    "     *_c_*" + a +
    "     __)__    跳舞" + a,

    " " + a +
    "     *\\c/*" + a +
    "     __)__    跳舞" + a

    );
var x = 0;
var preVal = '';
function tick() {
  preVal = " " + a + tl[x];
  console.log('\033[2J');
  console.log(preVal);
  x++;

  if (x != max) {
    setTimeout(tick, 200);
  } else {
    x = 0;
  }
}
tick();