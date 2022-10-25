function urlencode(value) {
    value = String(value);
    var novy = "";
    for (cykl = 0; cykl < value.length; cykl++) {
            var ok = true;
            if (value.charAt(cykl) == 'á') { novy += '*a1*'; ok = false; }
            if (value.charAt(cykl) == 'ä') { novy += '*a2*'; ok = false; }
            if (value.charAt(cykl) == 'Á') { novy += '*a3*'; ok = false; }
            if (value.charAt(cykl) == 'č') { novy += '*c1*'; ok = false; }
            if (value.charAt(cykl) == 'ć') { novy += '*c2*'; ok = false; }
            if (value.charAt(cykl) == 'Č') { novy += '*c3*'; ok = false; }
            if (value.charAt(cykl) == 'Ć') { novy += '*c4*'; ok = false; }
            if (value.charAt(cykl) == 'ď') { novy += '*d1*'; ok = false; }
            if (value.charAt(cykl) == 'Ď') { novy += '*d2*'; ok = false; }
            if (value.charAt(cykl) == 'é') { novy += '*e1*'; ok = false; }
            if (value.charAt(cykl) == 'ě') { novy += '*e2*'; ok = false; }
            if (value.charAt(cykl) == 'É') { novy += '*e3*'; ok = false; }
            if (value.charAt(cykl) == 'Ě') { novy += '*e4*'; ok = false; }
            if (value.charAt(cykl) == 'í') { novy += '*i1*'; ok = false; }
            if (value.charAt(cykl) == 'Í') { novy += '*i2*'; ok = false; }
            if (value.charAt(cykl) == 'ĺ') { novy += '*l1*'; ok = false; }
            if (value.charAt(cykl) == 'ľ') { novy += '*l2*'; ok = false; }
            if (value.charAt(cykl) == 'Ĺ') { novy += '*l3*'; ok = false; }
            if (value.charAt(cykl) == 'Ľ') { novy += '*l4*'; ok = false; }
            if (value.charAt(cykl) == 'ń') { novy += '*n1*'; ok = false; }
            if (value.charAt(cykl) == 'ň') { novy += '*n2*'; ok = false; }
            if (value.charAt(cykl) == 'Ń') { novy += '*n3*'; ok = false; }
            if (value.charAt(cykl) == 'Ň') { novy += '*n4*'; ok = false; }
            if (value.charAt(cykl) == 'ó') { novy += '*o1*'; ok = false; }
            if (value.charAt(cykl) == 'ô') { novy += '*o2*'; ok = false; }
            if (value.charAt(cykl) == 'Ó') { novy += '*o3*'; ok = false; }
            if (value.charAt(cykl) == 'Ô') { novy += '*o4*'; ok = false; }
            if (value.charAt(cykl) == 'ŕ') { novy += '*r1*'; ok = false; }
            if (value.charAt(cykl) == 'ř') { novy += '*r2*'; ok = false; }
            if (value.charAt(cykl) == 'Ŕ') { novy += '*r3*'; ok = false; }
            if (value.charAt(cykl) == 'Ř') { novy += '*r4*'; ok = false; }
            if (value.charAt(cykl) == 'ś') { novy += '*s1*'; ok = false; }
            if (value.charAt(cykl) == 'š') { novy += '*s2*'; ok = false; }
            if (value.charAt(cykl) == 'Ś') { novy += '*s3*'; ok = false; }
            if (value.charAt(cykl) == 'Š') { novy += '*s4*'; ok = false; }
            if (value.charAt(cykl) == 'ť') { novy += '*t1*'; ok = false; }
            if (value.charAt(cykl) == 'Ť') { novy += '*t2*'; ok = false; }
            if (value.charAt(cykl) == 'ú') { novy += '*u1*'; ok = false; }
            if (value.charAt(cykl) == 'ů') { novy += '*u2*'; ok = false; }
            if (value.charAt(cykl) == 'Ú') { novy += '*u3*'; ok = false; }
            if (value.charAt(cykl) == 'Ů') { novy += '*u4*'; ok = false; }
            if (value.charAt(cykl) == 'ý') { novy += '*y1*'; ok = false; }
            if (value.charAt(cykl) == 'Ý') { novy += '*y2*'; ok = false; }
            if (value.charAt(cykl) == 'ź') { novy += '*z1*'; ok = false; }
            if (value.charAt(cykl) == 'ž') { novy += '*z2*'; ok = false; }
            if (value.charAt(cykl) == 'Ź') { novy += '*z3*'; ok = false; }
            if (value.charAt(cykl) == 'Ž') { novy += '*z4*'; ok = false; }
            if (value.charAt(cykl) == ' ') { novy += '*m*'; ok = false; }
            if (value.charAt(cykl) == '/') { novy += '*l*'; ok = false; }
            if (value.charAt(cykl) == '\\') { novy += '*backslash*'; ok = false; }
            if (value.charAt(cykl) == '+') { novy += '*plus*'; ok = false; }
            if (value.charAt(cykl) == '%') { novy += '*percent*'; ok = false; }
            if (value.charAt(cykl) == '&') { novy += '*and*'; ok = false; }
            if (value.charAt(cykl) == '€') { novy += '*ceur*'; ok = false; }
            if (value.charAt(cykl) == '$') { novy += '*cusd*'; ok = false; }
            if (value.charAt(cykl) == '£') { novy += '*cgbp*'; ok = false; }
            if (value.charAt(cykl) == '#') { novy += '*number_sign*'; ok = false; }
            if (value.charAt(cykl) == '^') { novy += '*caret*'; ok = false; }
            if (value.charAt(cykl) == '{') { novy += '*curly_left*'; ok = false; }
            if (value.charAt(cykl) == '}') { novy += '*curly_right*'; ok = false; }
            if (value.charAt(cykl) == '\"') { novy += '*quotation_mark*'; ok = false; }
            if (value.charAt(cykl) == '|') { novy += '*vertical_bar*'; ok = false; }
            if (value.charAt(cykl) == '~') { novy += '*bacon*'; ok = false; }
            if (value.charAt(cykl) == '[') { novy += '*square_bracket_right*'; ok = false; }
            if (value.charAt(cykl) == ']') { novy += '*square_bracket_left*'; ok = false; }

            
            if (ok) { novy += value.charAt(cykl); }
    }
    return novy;
}
function replaceAll(search, replaceTo, value) {
    while (value.indexOf(search) > -1) {
        value = value.replace(search, replaceTo);
    }
    return value;
}

function urldecode(value) {
    value = replaceAll("*a1*", "á", value);
    value = replaceAll("*a2*", "ä", value);
    value = replaceAll("*a3*", "Á", value);
    value = replaceAll("*c1*", "č", value);
    value = replaceAll("*c2*", "ć", value);
    value = replaceAll("*c3*", "Č", value);
    value = replaceAll("*c4*", "Ć", value);
    value = replaceAll("*d1*", "ď", value);
    value = replaceAll("*d2*", "Ď", value);
    value = replaceAll("*e1*", "é", value);
    value = replaceAll("*e2*", "ě", value);
    value = replaceAll("*e3*", "É", value);
    value = replaceAll("*e4*", "Ě", value);
    value = replaceAll("*i1*", "í", value);
    value = replaceAll("*i2*", "Í", value);
    value = replaceAll("*l1*", "ĺ", value);
    value = replaceAll("*l2*", "ľ", value);
    value = replaceAll("*l3*", "Ĺ", value);
    value = replaceAll("*l4*", "Ľ", value);
    value = replaceAll("*n1*", "ń", value);
    value = replaceAll("*n2*", "ň", value);
    value = replaceAll("*n3*", "Ń", value);
    value = replaceAll("*n4*", "Ň", value);
    value = replaceAll("*o1*", "ó", value);
    value = replaceAll("*o2*", "ô", value);
    value = replaceAll("*o3*", "Ó", value);
    value = replaceAll("*o4*", "Ô", value);
    value = replaceAll("*o5*", "ö", value);
    value = replaceAll("*r1*", "ŕ", value);
    value = replaceAll("*r2*", "ř", value);
    value = replaceAll("*r3*", "Ŕ", value);
    value = replaceAll("*r4*", "Ř", value);
    value = replaceAll("*s1*", "ś", value);
    value = replaceAll("*s2*", "š", value);
    value = replaceAll("*s3*", "Ś", value);
    value = replaceAll("*s4*", "Š", value);
    value = replaceAll("*t1*", "ť", value);
    value = replaceAll("*t2*", "Ť", value);
    value = replaceAll("*u1*", "ú", value);
    value = replaceAll("*u2*", "ů", value);
    value = replaceAll("*u3*", "Ú", value);
    value = replaceAll("*u4*", "Ů", value);
    value = replaceAll("*y1*", "ý", value);
    value = replaceAll("*y2*", "Ý", value);
    value = replaceAll("*z1*", "ź", value);
    value = replaceAll("*z2*", "ž", value);
    value = replaceAll("*z3*", "Ź", value);
    value = replaceAll("*z4*", "Ž", value);
    value = replaceAll("*m*", " ", value);
    value = replaceAll("*l*", "/", value);
    value = replaceAll("*backslash*", "\\", value);
    value = replaceAll("*plus*", "+", value);
    value = replaceAll("*percent*", "%", value);
    value = replaceAll("*and*", "&", value);
    value = replaceAll("*comma*", "'", value);
    value = replaceAll("*quotation_mark*", "\"", value);
    value = replaceAll("*question_mark*", "?", value);
    value = replaceAll("*ceur*", "€", value);
    value = replaceAll("*cusd*", "$", value);
    value = replaceAll("*cgbp*", "£", value);
    value = replaceAll("*number_sign*", "#", value);
    value = replaceAll("*caret*", "^", value);
    value = replaceAll("*curly_left*", "{", value);
    value = replaceAll("*curly_right*", "}", value);
    value = replaceAll("*vertical_bar*", "|", value);
    value = replaceAll("*bacon*", "~", value);
    value = replaceAll("*square_bracket_right*", "[", value);
    value = replaceAll("*square_bracket_left*", "]", value);
    value = replaceAll("*new_line2*", "", value);
    value = replaceAll("*new_line*", "\n", value);

    return value;
}
