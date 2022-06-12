import {defineComponent} from "vue";

export default defineComponent({
    methods: {
        phoneText(value: string): string {
            if (value.length < 10) return value;
            let areaCode = '';
            let pos = 0;
            if (value[0] === '+') {
                areaCode = value.slice(0, 3);
                pos += 3;
            } else {
                areaCode = '+84';
                pos += 1;
            }
            const twoDigit = value.slice(pos, pos + 2);
            pos += 2;
            const threeDigit = value.slice(pos, pos + 3);
            pos += 3;
            const endDigit = value.slice(pos, value.length);
            return `(${areaCode}) ${twoDigit} ${threeDigit} ${endDigit}`;
        }
    }
})